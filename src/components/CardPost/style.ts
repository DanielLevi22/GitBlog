import styled from "styled-components";


export const ContainerCardPost = styled.div`
  box-shadow: 0 1px 2px ${ props => props.theme["base-border"]};  
  max-width: 416px;
  border-radius: 10px;
  
  background-color:${ props => props.theme["base-post"]} ;

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    padding: 32px;
    display: block;
  }
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: start;
  h1 {
   max-width: 240px;
   font-size: 20px;
   font-weight: bold;
   color: ${ props => props.theme["base-title"]};

  }
  @media screen and (max-width: 640px) {
    h1 {
      font-size: 16px;
    }
  }

  span {
    margin-top: 5px;
    font-size: 12px;
    color: ${ props => props.theme["base-span"]};
    white-space: nowrap;
  }

`

export const CardContent = styled.div`
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de linhas a serem exibidas */
  -webkit-box-orient: vertical;

`