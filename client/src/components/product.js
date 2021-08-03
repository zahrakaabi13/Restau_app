import { getProduct } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'



export default function ProductList() {

     const dispatch = useDispatch()
     const product = useSelector(state=>state.productstore.datas)

     useEffect(() => {
        dispatch(getProduct());
      },[]);
      console.log(product, "did we ?");

    return (
        <div className="container shop">
        {product.map(el => (
                    <div className="mt-5 pt-5">
                      <img src={el.imagePlat} alt=""/>
                      <h2>{el.namePlat}</h2>
                      <h6>{el.descripPlat}</h6>
                      <h4>{el.pricePlat}</h4>
                      <h5>{el.ratePlat}</h5>
                      <button type="submit" className="px-5">Add to Cart</button>
                    </div>
        ))}
        </div>
    )
}



