import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${ props => props.theme["base-profile"]};

  width: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;

  @media screen and (max-width: 640px) {
   img {
      height: 150px;
      width: 150px;
   }
  
  }
`