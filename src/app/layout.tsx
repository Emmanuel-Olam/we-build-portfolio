import { Poppins } from 'next/font/google'
import { Metadata } from 'next'
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
        {children}
      </body>
    </html>
  )
}
