import { useParams } from 'react-router-dom'
import {Burgers} from '../../components/Burgers'
export const CatalogPage = () => {
  const params = useParams()

  console.log({ params });

  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Catalog</p>
      <Burgers/>
    </div>
  )
}
