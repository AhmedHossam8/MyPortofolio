import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#101825",
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid item xs={12} sm={4} align="center">
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: "#CACACA" }}
                    >
                        Follow Me
                    </Typography>
                    <Link
                        href="https://www.linkedin.com/in/ahmed-hossam-ba55b8222/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ pl: 1, pr: 1, color: "#CACACA" }}
                    >
                        <LinkedIn />
                    </Link>
                    <Link
                        href="https://github.com/AhmedHossam8"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ pl: 1, pr: 1, color: "#CACACA"  }}
                    >
                        <GitHub />
                    </Link>
                    <Link
                        href="https://www.facebook.com/ahmed.h.emara.75/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ pl: 1, pr: 1, color: "#CACACA"  }}
                    >
                        <Facebook />
                    </Link>
                    <Link
                        href="https://www.instagram.com/ahmedhossamemara8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ pl: 1, pr: 1, color: "#CACACA"  }}
                    >
                        <Instagram />
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send?phone=01228536464"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ pl: 1, pr: 1, color: "#CACACA"  }}
                    >
                        <WhatsApp />
                    </Link>

                </Grid>
                <Box mt={5}>
                    <Typography color="#CACACA" align="center">
                        {"Copyright © "}
                        {new Date().getFullYear()}
                        {". "}
                        The website is made by Ahmed Emara
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}