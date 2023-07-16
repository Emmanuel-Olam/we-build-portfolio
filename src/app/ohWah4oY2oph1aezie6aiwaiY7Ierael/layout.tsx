"use client";

import { Box, Center, Container } from "@chakra-ui/react"
import { Providers } from "../providers"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <Box py={10}>
        <Container maxW="container.xl">
          {children}
        </Container>
      </Box>
    </Providers>
  )
}
