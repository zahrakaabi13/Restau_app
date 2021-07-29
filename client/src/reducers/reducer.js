const product = []

// export default function productReducer(
//     state = {product :  []},
//     action
// ) {
export const productReducer = (state = product, action) => {
    switch(action.type) {
        case "GET_PRODUCT_SUCCEDED":
            return action.payload;
        break;
    }
return state
}