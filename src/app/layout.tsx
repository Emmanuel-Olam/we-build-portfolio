'use client';

import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import { Metadata } from 'next'
import NavbarComponent from './components/navbar'
import { Box } from '@chakra-ui/react'

const poppins = Poppins({
  weight: [
    '400',
    '600',
  ],
  style: [
    'normal',
  ],
  subsets: [
    'latin',
  ],
})

export const metadata: Metadata = {
  title: 'WeBuild - Blockchian and Web Development Agency',
  description: 'We are a team of blockchain and web developers who are passionate about building products that people love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  )
}
