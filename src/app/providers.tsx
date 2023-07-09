'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavbarComponent from './components/navbar'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Box
          bgColor={"blackAlpha.700"}
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