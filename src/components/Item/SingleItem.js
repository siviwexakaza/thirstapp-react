import React from 'react'


const SingleItem = (props) =>{
    const {itm} = props
    return(
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">

            <div class="card mb-3">
                <img src={itm.imageURL} className="card-img-top" alt="Photo" />
                <div className="card-body">
                    <h5 className="card-title">{itm.price}</h5>
                    <p className="card-text">{itm.name}</p>
                    <p className="card-text"><small class="text-muted">{itm.store}</small></p>
                </div>
            </div>

        </div>
        
    )

}

export default SingleItem