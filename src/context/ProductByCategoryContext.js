import React, { createContext, useEffect, useState } from 'react'

export const ProductByCategoryContext = createContext();

const ProductByCategoryWrapper = (props)=>{
    const [productCategory, setProductCategory]= useState();
    return(
        <ProductByCategoryContext.Provider value={[productCategory, setProductCategory]}>
            {props.children}
        </ProductByCategoryContext.Provider>
    );
}
export default ProductByCategoryWrapper;