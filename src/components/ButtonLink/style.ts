import styled from "styled-components";

export const Button = styled.div`
  text-transform:uppercase;
  color: ${props => props.theme.blue};
  font-weight: bold ;
  display: flex;
  align-items: center;
  gap: 10px;
`