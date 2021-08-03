import {fetchProduct, fetchAddProduct, fetchDeleteProduct} from '../request'

export function getProduct() {
    return dispatch => {
        fetchProduct()
        .then (product =>dispatch (
            {type: "GET_PRODUCT_SUCCEDED",payload: product})
        )
        .catch(err=>dispatch( {
            type: "GET_PRODUCT_FAILED",
            payload: err
          }))
    }
}


export const addProduct=(imagePlat,namePlat,descripPlat,pricePlat,ratePlat)=> async (dispatch) =>{
    try{
        const res = await fetchAddProduct (imagePlat,namePlat,descripPlat,pricePlat,ratePlat);
        dispatch ({
            type:"ADD_PRODUCT_SUCCED",     
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}

export const deleteProduct = id => async (dispatch) =>{
    try{
        await fetchDeleteProduct(id)
        dispatch ({
            type:"DELETE_PRODUCT_SUCCED",     
            payload : id
        })
        console.log("payload")
        dispatch(getProduct)
    }
    catch (error) {
              console.log(error);
             }
}

 