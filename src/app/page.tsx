"use client";
import React, { useEffect } from "react"
import { Box, Container } from "@chakra-ui/react";
import Hero from "./components/LandingPage/hero";
import Footer from "./components/footer";
import { Providers } from "./providers";
import { Projects } from "./components/portfolio/main";
import { Services } from "./components/services";
import { Points } from "./components/points";
import { AboutUs } from "./components/about";
import ContactUs from "./components/contact";
import Aos from "aos"
import "aos/dist/aos.css"; 
import "./globals.css";
import { Reviews } from "./components/reviews";
import { Teams } from "./components/teams";

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

export default function Home() {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])

  return (
    <Providers>
      <Box className='overflow-hidden'>
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
