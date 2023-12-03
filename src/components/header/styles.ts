import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${ props => props.theme["base-profile"]};

 
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;

  @media screen and (max-width: 640px) {
   img {
      height: 6.3rem;
      width:  6.3rem;
   }
   
   :first-child {
      height: 50px;
      width:  50px;
   }
   :last-child {
      height: 50px;
      width:  50px;
   }
   
  
  }
`