import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${ props => props.theme["base-profile"]};
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;
`