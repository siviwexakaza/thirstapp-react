import React from 'react'
import loading from '../../ajax-loader.gif'


const Loading = () =>{
    return(
        <div>
            <img src={loading} alt="Loading..." style={{width: '30px',margin: '40px auto', display: 'block'}} />
            
        </div>
        
        
    )

}

export default Loading