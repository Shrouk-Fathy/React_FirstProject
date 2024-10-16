import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductList() {
    
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProduct = ()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }

    const getCategories = ()=>{
        fetch(`${api_url}/categories`)
        .then((res)=>res.json())
        .then((data)=>setCategories(data))
    }

    const getCatProducts = (catName)=>{
        fetch(`${api_url}/category/${catName}`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }

    useEffect(()=>{
        getProduct();
        getCategories();
    },[])
  return (
    <div className='ProductList p-5 h'>
        <h2>Our Products</h2>
        <div className='container'>
            <div className='row mx-auto p-2' >
            
               <div className='col-12'>
                    <button className='btn btn-info' style={{marginLeft:"10px",marginTop:"10px"}} onClick={()=>{getProduct()}}> All </button>
            
                    {categories.map((catBtn)=>{
                        return(
                            <button key={catBtn} className='btn btn-info' style={{marginLeft:"10px",marginTop:"10px"}} onClick={()=>{getCatProducts(catBtn)}}> {catBtn} </button>
                        )
                    })}
                </div>
            </div>
        
            <div className='row mx-auto p-5' >
                {products.map((product)=>{
                    return(
                        <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                            <Product product={product} show={true}/>  
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
