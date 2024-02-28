import {ADD_TO_CART} from '../constant'

export const addToCart=(item)=>{
    console.log(item)
    return {
        type:ADD_TO_CART,
        data:item
    }
}

const removeTocart=(item)=>{
    return {
        type:'REMOVE_TO_CART',
        data:item
    }
}

// export default addTocart;