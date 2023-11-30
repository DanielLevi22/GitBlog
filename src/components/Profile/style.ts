import styled from "styled-components";



export const ContainerProfile = styled.div`
  box-shadow: 0 1px 2px ${ props => props.theme["base-border"]};
  margin-top: -80px;
  padding: 32px 32px 32px 40px;
  display: flex;
  gap: 32px;
  border-radius: 8px;

  background-color: ${ props => props.theme["base-profile"] };

`

export const ProfileImg = styled.div`
  overflow: hidden;
  border-radius: 8px;
  img {
   border-radius: 8px;
    height: 148px;
    width: 148px;
    object-fit: cover;
  }
  
`

export const ProfileContent = styled.div`
  max-width: 610px;
  display: flex ;
  flex-direction: column;
`

export const ProfileName = styled.div`

  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  color: ${ props => props.theme["base-title"]};
  font-weight: bold;
  a {
   text-decoration: none;
  }
`

export const ProfileDescription = styled.div`
  margin-top: 8px;
`

export const ProfileSocialMedias = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  color: ${ props => props.theme["base-subtitle"]};
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 18px;
    width: 18px;

  }
`