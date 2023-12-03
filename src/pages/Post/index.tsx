import { ButtonLink } from "../../components/ButtonLink";
import { api } from "../../libs/api";
import { ContainerIconsPost, IconPost, PostInfo, PostMain, PostTitles, PostTop, ProgramingLine, SessionPost, SessionPostContent, SessionPostProgramin } from "./style";
import { Link, useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { compareDate } from "../../libs/compareDate";


interface Item {
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

export function Post() {
  const [userData, setUserData] = useState<Item | null>(null)
  const { id } = useParams();
  console.log(id)


  async function fetchPost() {
    const response = await api.get(`/repos/DanielLevi22/GitBlog/issues/${id}`)
    const data:Item = response.data
    setUserData(data)
  }

  useEffect(() => {
    fetchPost()
  },[])

  return(
    <div>
      <PostMain>
        <PostInfo>
          <PostTop>
            <Link to='/' >
             <ButtonLink variant="tertiary"/>
            </Link>
            <Link to={userData?.html_url ?? ''}target="_blank">
              <ButtonLink variant="secondary" />
            </Link>
          </PostTop>
          <PostTitles>
            <h1>{userData?.title}</h1>
            <ContainerIconsPost>
             
              <IconPost>
                <img src="/studio.svg" alt="" />
                <span>{compareDate(userData?.created_at ?? '')}</span>
              </IconPost>
              <IconPost>
                <img src="/chat.svg" alt="" />
                <span>{userData?.comments} comentários</span>
              </IconPost>
            </ContainerIconsPost>
          </PostTitles>   
        </PostInfo>

        <SessionPost>
          <SessionPostContent>
            <p>
              {userData?.body}
            </p>
            <span>Dynamic typing</span>
            <p>
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript
              are not directly associated with any particular value type, and any variable can be 
              assigned (and re-assigned) values of all types:
            </p>

          </SessionPostContent>
          <SessionPostProgramin>
            <ProgramingLine>
             <strong>let</strong>  {''}{''}
             foo= <span>42;</span>  <div>// foo is now a number</div> 
            </ProgramingLine>
            <ProgramingLine>
             foo = <span> {'‘bar’;'}</span> <div>// foo is now a string</div>
            </ProgramingLine>
            <ProgramingLine>
             foo =  <span> true;</span>  <div>// foo is now a boolean</div>  
            </ProgramingLine>
          </SessionPostProgramin>
        </SessionPost>

      </PostMain>
    </div>
  )
}