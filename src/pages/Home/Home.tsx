import CardPost from "../../components/CardPost";
import { Profile } from "../../components/Profile";
import { ContainerInput, DescribePulicacoes, HomeMain, Input, ConntainerSessionPost } from "./styles";

export function Home() {
  
 
  return(
    <div>
        <HomeMain>
          <Profile />

          <DescribePulicacoes>
              <strong>Publicações</strong>
              <span>6 publicações</span>
          </DescribePulicacoes>
          <ContainerInput>
            <label htmlFor="conteudo"></label>
            <Input  type="text" id="conteudo" placeholder="Buscar conteúdo"/>
          </ContainerInput>
          
          <ConntainerSessionPost>

             <CardPost />
             <CardPost />
             <CardPost />
             <CardPost />
             <CardPost />
             <CardPost />

          </ConntainerSessionPost>
        </HomeMain>
    </div>
  )
}