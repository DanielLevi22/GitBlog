import { ButtonLink } from "../../components/ButtonLink";
import { ContainerIconsPost, IconPost, PostInfo, PostMain, PostTitles, PostTop, ProgramingLine, SessionPost, SessionPostContent, SessionPostProgramin } from "./style";
import { Link } from 'react-router-dom'
export function Post() {
  return(
    <div>
      <PostMain>
        <PostInfo>
          <PostTop>
            <Link to="/">
             <ButtonLink variant="tertiary"/>
            </Link>
            <ButtonLink variant="secondary" />
          </PostTop>
          <PostTitles>
            <h1>JavaScript data types and data structures</h1>
            <ContainerIconsPost>
              <IconPost>
                <img src="/github.svg" alt="" />
                <span>cameronwll  </span>
              </IconPost>
              <IconPost>
                <img src="/studio.svg" alt="" />
                <span>Há 1 dia</span>
              </IconPost>
              <IconPost>
                <img src="/chat.svg" alt="" />
                <span>5 comentários</span>
              </IconPost>
            </ContainerIconsPost>
          </PostTitles>   
        </PostInfo>

        <SessionPost>
          <SessionPostContent>
            <p>
            Programming languages all have built-in data structures, but these often differ from one language to another.
             This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
             These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
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