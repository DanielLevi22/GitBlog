import { ButtonLink } from "../ButtonLink";
import { ContainerIcons, ContainerProfile, ProfileContent, ProfileDescription, ProfileImg, ProfileName, ProfileSocialMedias } from "./style";
import { Link } from 'react-router-dom'
import  { useEffect, useState } from 'react';
import { api } from "../../libs/api";

interface gitUser {
  name: string;
  avatar_url: string
  bio: string
  public_repos: number
  url: string
  followers: number
  following: number
  html_url: string
  repos_url: string
}


export function Profile() {
  const [userData, setUserData] = useState<gitUser | null>(null);


async function fetchUserData() {
  try {
    const response = await api.get('/users/DanielLevi22');
    const data:gitUser = response.data
    setUserData(data);
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
}



  
  useEffect(() => {
    fetchUserData()
  },[])
  return(
    <ContainerProfile>
      <ProfileImg>
        <img src={userData?.avatar_url} alt=""  />
      </ProfileImg>
      <ProfileContent>
        <ProfileName>
          <span>{userData?.name}</span>
          <Link to={userData?.html_url ?? '#'} target="_blank" >
           <ButtonLink variant="primary"/> 
          </Link>
        </ProfileName>

        <ProfileDescription>
          {userData?.bio}
        </ProfileDescription>

        <ProfileSocialMedias>
          <ContainerIcons>
            <img src="/github.svg" alt="" />
            cameronwll
          </ContainerIcons>
          <ContainerIcons>
          <img src="groups.svg" alt="" />
           {userData?.followers}
          </ContainerIcons>
        </ProfileSocialMedias>


      </ProfileContent>
    </ContainerProfile>
  )
}