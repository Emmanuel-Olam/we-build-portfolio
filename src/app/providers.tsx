'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavbarComponent from './components/navbar'
import theme from './theme'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box
          bgColor={"blackAlpha.600"}
          backgroundImage={
            'url(/bg.png)'
          }
          minH={'100vh'}
        >
          <NavbarComponent />
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}