import React, { useState, useEffect } from 'react';

const slideWidth = 30;

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CarouselSlideItem = ({ pos, player, activeIdx }) => {
  const itemStyles = {
    transform: `translateX(${pos * slideWidth}rem)`,
  };

  if (pos === activeIdx - 1 || pos === activeIdx + 1) {
    itemStyles.filter = 'grayscale(1)';
  } else if (pos !== activeIdx) {
    itemStyles.opacity = 0;
  }

  return (
    <li className="carousel__slide-item" style={itemStyles}>
      <div className="carousel__slide-item-img-link">
        <img src={player.image} alt={player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{player.title}</h4>
        <p>{player.desc}</p>
      </div>
    </li>
  );
};

const Carousel = () => {
  const [players, setPlayers] = useState([]);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Fetch data from a JSON file
    fetch('../data/projects.json') // Adjust the path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data); // Assuming the JSON structure matches the player structure
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setActiveIdx((prevIdx) => (prevIdx - jump + players.length) % players.length);
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setActiveIdx((prevIdx) => (prevIdx + jump) % players.length);
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((players.length - (players[0] % players.length)) % players.length);
  }, [players]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {players.map((player, i) => (
              <CarouselSlideItem
                key={i}
                pos={i}
                player={player}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {players.slice(0, players.length).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
