import styled from "styled-components";


export const  HomeMain = styled.main`
  max-width: 864px;
  margin: auto;
  padding-bottom: 80px;
`

export const DescribePulicacoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 62px;

  strong {
    color: ${ props => props.theme["base-subtitle"]};
    font-weight: bold;
    font-size: 20px;
  }
  
  span {
    color: ${ props => props.theme["base-span"]};
  }
`

export const ContainerInput = styled.div`

  box-shadow: 0 0 0 1px ${ props => props.theme["base-border"]};
  background-color: ${ props => props.theme["base-input"]};
  margin-top: 12px;
  border-radius: 8px;
  transition: box-shadow 2s linear;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${ props => props.theme["base-text"]};
  padding: 12px;
  border-radius: 8px;

  &::placeholder {
    color: ${ props => props.theme["base-label"]};
  }

  &:focus-within {
    box-shadow: 0 0 0 1px  ${ props => props.theme["blue"]};
  }
`

export const ConntainerSessionPost = styled.section`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`