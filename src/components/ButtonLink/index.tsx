import { Button } from "./style"

interface ButtonLinkProps {
  variant: 'primary' | 'secondary' | 'tertiary'
}

export function ButtonLink({ variant }:ButtonLinkProps) {
  return(
    <Button>
      {
        variant === 'primary' && (
          <>
            github
            <img src="/Link.svg" alt="" />
          </>

        )
      }
      {
        variant === 'secondary' && (
          <>
            ver no github
            <img src="/Link.svg" alt="" />
          </>

        )
      }
      {
        variant === 'tertiary' && (
          <>
            <img src="/Left.svg" alt="" />
            voltar
          </>

        )
      }
    </Button>

)
}