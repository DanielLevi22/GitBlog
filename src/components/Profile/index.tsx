import { ButtonLink } from "../ButtonLink";
import { ContainerIcons, ContainerProfile, ProfileContent, ProfileDescription, ProfileImg, ProfileName, ProfileSocialMedias } from "./style";
import { Link } from 'react-router-dom'
export function Profile() {
  return(
    <ContainerProfile>
      <ProfileImg>
        <img src="https://github.com/daniellevi22.png" alt="" />
      </ProfileImg>
      <ProfileContent>
        <ProfileName>
          <span>Cameron Williamson</span>
          <Link to="/post">
           <ButtonLink variant="primary"/> 
          </Link>
        </ProfileName>

        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim
          aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </ProfileDescription>

        <ProfileSocialMedias>
          <ContainerIcons>
            <img src="/github.svg" alt="" />
            cameronwll
          </ContainerIcons>
          <ContainerIcons>
          <img src="Icon.svg" alt="" />
            Rocketseat
          </ContainerIcons>
          <ContainerIcons>
          <img src="groups.svg" alt="" />
           32 seguidores
          </ContainerIcons>
        </ProfileSocialMedias>


      </ProfileContent>
    </ContainerProfile>
  )
}