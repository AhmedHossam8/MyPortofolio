import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TextField, Button, Typography, Box } from '@mui/material';
import { animated, useSpring } from 'react-spring';

export default function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 600,
            mx: 'auto',
            p: 2,
            border: '2px solid #000000',
            borderRadius: '12px',
            boxShadow: 1,
            backgroundColor: '#e7e8ea',
          }}
        >
          <Typography variant="h4" align="center" mb={2}>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#111',
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </animated.div>
  );
}
