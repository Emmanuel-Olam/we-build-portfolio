import { Button, ButtonProps } from '@chakra-ui/react'


export function ButtonComponent({
  children,
  ...props
}: {
  children: React.ReactNode,
  props: ButtonProps
}) {
  return (
    <Button
      {...props}
      bg={'#B15227'}
      opacity={0.8}
      _hover={{
        bg: '#B15227',
        opacity: 1,
      }}
    >
      {children}
    </Button>
  )
}