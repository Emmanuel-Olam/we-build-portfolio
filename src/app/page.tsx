"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container } from '@chakra-ui/react'
import Hero from './components/LandingPage/hero'

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Hero />

      <Box>

      </Box>
    </Container>
  )
}
