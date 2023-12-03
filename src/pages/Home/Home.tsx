import { useForm } from "react-hook-form";
import CardPost, { PostData } from "../../components/CardPost";
import { Profile } from "../../components/Profile";
import { api } from "../../libs/api";
import { ContainerInput, DescribePulicacoes, HomeMain, Input, ConntainerSessionPost } from "./styles";
import  { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";






const HomeFormSchema = z.object({
  query: z.string(),
})

type  homeFormSchema = z.infer<typeof HomeFormSchema>
interface GitFatch {
  items: PostData[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState< GitFatch | null>(null)





const { register, handleSubmit } = useForm<homeFormSchema>({
  resolver: zodResolver(HomeFormSchema)
});




async function handleSearchPost(data?: homeFormSchema) {
  try {
    setIsLoading(true);
    const response = await api.get(`/search/issues?q=${data?.query}%20repo:DanielLevi22/GitBlog`);
    const list:GitFatch = response.data
    setData(list);
  } catch (error) {
    console.error("Erro na busca:");
  } finally {
    setIsLoading(false);
  }
}

useEffect(()=> {
  handleSearchPost({query: ''})
},[])



  return(
    <div>
        <HomeMain>
          <Profile />

          <DescribePulicacoes>
              <strong>Publicações</strong>
              <span>{data?.items?.length} publicações</span>
          </DescribePulicacoes>
          <ContainerInput>
            
            <form onSubmit={handleSubmit(handleSearchPost)}>
              <label htmlFor="conteudo"></label>
              <Input 
                type="text" id="conteudo"
                placeholder="Buscar conteúdo" 
                {...register('query')}
              />

            </form>
          </ContainerInput>
          
          <ConntainerSessionPost>
              {isLoading && <p>Bucando Informacoes....</p>}
              { data &&
                data.items.map((data) => (
                  <CardPost key={data.title} body={data.body}created_at={data.created_at} title={data.title} number={data.number}/>
                ))
              } 
            

          </ConntainerSessionPost>
        </HomeMain>
    </div>
  )
}