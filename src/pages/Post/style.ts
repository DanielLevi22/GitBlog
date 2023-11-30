import styled from "styled-components";

export const PostMain = styled.main`
  max-width: 864px; 
  margin: -80px auto;
`

export const PostInfo = styled.div`
  padding: 32px;
  background-color: ${ props => props.theme["base-profile"]};
  border-radius: 10px;
`

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
   text-decoration: none;
  }


`

export const PostTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1{ 
    margin-top: 20px;
    color:  ${props => props.theme["base-title"]};
  }
`
export const ContainerIconsPost = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const IconPost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${props => props.theme["base-span"]};
  }
`


export const SessionPost = styled.section`
  padding: 40px 32px;
`

export const SessionPostContent = styled.div`


  span {
    display: block;
    margin-top: 32px;
    margin-bottom: 12px;
    color: ${props => props.theme["blue"]};
    text-decoration: underline;
  }

`
export const SessionPostProgramin = styled.div`

  border-radius: 2px;
  margin-top: 24px;
  padding: 16px;
  background-color: ${props => props.theme["base-profile"]};
  strong {
    font-weight: 400;
    color: #80ABD6;
  }
  span {
    color: #6AD445;
  }
`

export const ProgramingLine = styled.div`
  display: flex; align-items: center;
  gap: 10px;

  div {
    margin-left: 20px;
    color: #4F6173;
  }
`