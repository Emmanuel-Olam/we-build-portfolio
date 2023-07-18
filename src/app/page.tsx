"use client";

import { Box, Container } from "@chakra-ui/react";
import Hero from "./components/LandingPage/hero";
import Footer from "./components/footer";
import { Providers } from "./providers";
import { Projects } from "./components/portfolio/main";
import { Services } from "./components/services";
import { Points } from "./components/points";
import { AboutUs } from "./components/about";
import ContactUs from "./components/contact";

import "./globals.css";
import { Reviews } from "./components/reviews";
import { Teams } from "./components/teams";


export default function Home() {
  return (
    <Providers>
      <Box>
        <Hero />
        <Container maxW="container.xl">
          <Points />
          <Services />
          <Projects />
          <Reviews />
          <AboutUs />
          <Teams />
        </Container>
        <ContactUs />
        <Footer />
      </Box>
    </Providers>
  );
}
