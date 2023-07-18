'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavbarComponent from './components/navbar'
import theme from './theme'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useNavigationEvent } from './hooks/useNavigation'


export function Providers({
  children
}: {
  children: React.ReactNode
}) {

  // useNavigationEvent({
  //   on: {
  //     routeChanged: ({ pathname, searchParams }) => {
  //       NProgress.start()
  //     }
  //   },
  //   off: {
  //     routeChanged: ({ pathname, searchParams }) => {
  //       NProgress.done()
  //     }
  //   }
  // })

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