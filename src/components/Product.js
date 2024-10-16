import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
  return (
    <div classNameName='product-card' style={{ maxWidth: "80%" , margin: "auto"}}>
            <div className="card p-4 my-4" style={{boxShadow:"0 5px 10px rgba(0, 0, 0, .2)",borderRadius:"20px",height:"550px"}}>
                <img src={props.product.image} className="card-img-top" alt="..." style={{width:"50%",margin:"auto",height:"70%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
                    {props.show  ? <Link to= {`product/${props.product.id}`} className="btn btn-info">Show Product</Link> : null}                 
                </div>
            </div>
    </div>
  )
}
