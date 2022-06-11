import React, { createContext, useEffect, useState } from 'react'

export const ProductDetailsContext = createContext();

const ProductDetailsContextWrapper = (props)=>{
    const [productId, setProductId]= useState();

    // const mapProductId = (pId)=> setProductId(pId);

    // useEffect(()=>{
    //     mapProductId();
    // },[mapProductId]);
    
    // console.log(productId);
    return(
        <ProductDetailsContext.Provider value={[productId, setProductId]}>
            {props.children}
        </ProductDetailsContext.Provider>
    );
}
export default ProductDetailsContextWrapper;