import { Button } from '@chakra-ui/react'

export function ButtonComponent({ 
    children, 
    ...props 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <Button {...props} color={'#B15227'}>
      {children}
    </Button>
  )
}