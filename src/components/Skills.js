import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='skills-container'>
            <h2>My Skills</h2>
            <Box
                sx={{ flexGrow: 1, bgcolor: '#151f2f', display: 'flex', height: 224 }} className='Box'
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', color: "white" }}
                >
                    <Tab label="Front-End Development" {...a11yProps(0)} sx={{ color: "white" }} />
                    <Tab label="Back-End Development" {...a11yProps(1)} sx={{ color: "white" }} />
                    <Tab label="Mobile Development" {...a11yProps(2)} sx={{ color: "white" }} />
                    <Tab label="Programming Languages" {...a11yProps(3)} sx={{ color: "white" }} />
                    <Tab label="Others" {...a11yProps(4)} sx={{ color: "white" }} />
                </Tabs>
                <div className='skills-tab'>
                    <TabPanel value={value} index={0} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Languages</strong>
                        <ul>
                            <li style={{ color: "white" }}>HTML/HTML5</li>
                            <li style={{ color: "white" }}>CSS</li>
                            <li style={{ color: "white" }}>Javascript</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={0} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Frameworks</strong>
                        <ul>
                            <li style={{ color: "white" }}>Bootstrap</li>
                            <li style={{ color: "white" }}>React js</li>
                            <li style={{ color: "white" }}>Typescript</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Languages</strong>
                        <ul>
                            <li style={{ color: "white" }}>Python</li>
                            <li style={{ color: "white" }}>PHP</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Frameworks</strong>
                        <ul>
                            <li style={{ color: "white" }}>Node js</li>
                            <li style={{ color: "white" }}>ASP.NET</li>
                            <li style={{ color: "white" }}>Fast API</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Database Management</strong>
                        <ul>
                            <li style={{ color: "white" }}>SQL</li>
                            <li style={{ color: "white" }}>NoSQL</li>
                            <li style={{ color: "white" }}>MySQL</li>
                            <li style={{ color: "white" }}>MongoDB</li>
                            <li style={{ color: "white" }}>PostgreSQL</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Languages</strong>
                        <ul>
                            <li style={{ color: "white" }}>Kotlin</li>
                            <li style={{ color: "white" }}>Java</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Frameworks</strong>
                        <ul>
                            <li style={{ color: "white" }}>Flutter</li>
                            <li style={{ color: "white" }}>React Native</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Database Management</strong>
                        <ul>
                            <li style={{ color: "white" }}>FireBase</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={3} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Languages</strong>
                        <ul>
                            <li style={{ color: "white" }}>C</li>
                            <li style={{ color: "white" }}>C++</li>
                            <li style={{ color: "white" }}>C#</li>
                            <li style={{ color: "white" }}>Python</li>

                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={3} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}></strong>
                        <ul>
                            <li style={{ color: "white" }}>Java</li>
                            <li style={{ color: "white" }}>Kotlin</li>
                            <li style={{ color: "white" }}>Javascript</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={4} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Patterns & Practices</strong>
                        <ul>
                            <li style={{ color: "white" }}>OOP</li>
                            <li style={{ color: "white" }}>Data Structure</li>
                            <li style={{ color: "white" }}>AI</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={4} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Tools & Platforms</strong>
                        <ul>
                            <li style={{ color: "white" }}>GIT</li>
                            <li style={{ color: "white" }}>Rest API</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={4} className='TabPanel'>
                        <strong style={{ color: "aquamarine" }}>Design</strong>
                        <ul>
                            <li style={{ color: "white" }}>Photoshop</li>
                            <li style={{ color: "white" }}>Illustrator</li>
                            <li style={{ color: "white" }}>Figma</li>
                        </ul>
                    </TabPanel>
                </div>
            </Box>
        </div>
    );
}