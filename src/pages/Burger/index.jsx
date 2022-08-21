import { useParams } from "react-router-dom"
import { BURGERS } from "../../components/Burgers/constants"


import classes from '../../pages/Burger/styles.module.scss'

export const BurgerPage = () => {
    const {id} = useParams()

   const burger = BURGERS.find(burger => burger.id === parseInt(id))
   console.log(burger)
    return (
        <div>
           <div > {burger.name}</div> 
           <span >{burger.weight} </span> 
           <p >Состав: {burger.compound.join(', ')}</p>
           <img  src={burger.photo} alt="" />
   
          
           
        
    </div>
    )
}