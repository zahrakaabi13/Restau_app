import { getProduct } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'



export default function ProductList() {

     const dispatch = useDispatch()
     const product = useSelector(state=>state.productstore)

     useEffect(() => {
        dispatch(getProduct());
      },[]);
      console.log(product, "did we ?");

    return (
        <div>
            <h1>List of products</h1>
        {product.map(el => (
                    <div>
                      <h2>{el.namePlat}</h2>
                      <p>{el.descripPlat}</p>
                      <h3>{el.pricePlat}</h3>
                      <h4>{el.ratePlat}</h4>
                    </div>
        ))}
        </div>
    )
}



