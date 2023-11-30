import { ContainerHeader } from "./styles";

interface HeaderProps {
  path: string
}

export function Header({path}:HeaderProps) {
  return(
    <ContainerHeader>
      <img src="detalh-l.svg" alt="" />
      {
        path === '/' &&
        <img src="/Logo.svg" alt=" logo" />
      }
      {
        path === '/post' &&
        <img src="/GITHUB BLOG.svg" alt=" logo" />
      }

      <img src="detalhe-r.svg" alt="" />
    </ContainerHeader>
  )
}