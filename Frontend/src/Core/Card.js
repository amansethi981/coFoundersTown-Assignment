import React from "react"

const Card=(newarticle)=>{
    const cartDescrption=newarticle?newarticle.description:"Default description";
    return (
        <div className="card text-white bg-dark border border-info ">
            <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        </div>
    )
}

export default Card;