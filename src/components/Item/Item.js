import React, {Component} from 'react'
import {Consumer} from '../../context'
import Loading from '../Layouts/Loading'
import SingleItem from '../Item/SingleItem'


 class Item extends Component{
    render(){

        return(
            <Consumer>
                {value =>{
                    
                    const {items} = value
                    if(items === undefined || items.length ==0){
                        return <Loading />

                    }else{

                        return(
                            <React.Fragment>
                            <h5 className="mb-4" style={{fontWeight:'100'}}>{value.heading}</h5>
                                <div className="row">
                                    {items.map(item=>(

                                        <SingleItem key={item.name} itm={item} />

                                    ))}


                                </div>
                            </React.Fragment>
                        )

                    }
                }}
            </Consumer>
        )

    }
}

export default Item