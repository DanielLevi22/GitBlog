
import { compareDate } from "../../libs/compareDate";
import { CardContent, CardTop, ContainerCardPost } from "./style";
import { Link } from "react-router-dom";
 export interface PostData {
  number: number;
  title: string
  body: string
  created_at: string
}


export default function CardPost({body,created_at,title, number}:PostData) {
 


  return (
      <ContainerCardPost>
        <Link to={`/post/${number}`}>
          <CardTop>
            <h1>{title}</h1>
            <span>{compareDate(created_at)}</span>
          </CardTop>
        <CardContent>
          {body}
        </CardContent>
        </Link>
      </ContainerCardPost>
  )
}
