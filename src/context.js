import React, {Component} from 'react'
import axios from 'axios'
const Context = React.createContext()
const reducer = (state,action)=>{
    switch(action.type){
        case 'SEARCH' :
        return{
            ...state,
            items: action.payload,
            heading:'Search Results'
        };
        default: 
            return state
    }
}

 export class Provider extends Component{

    state = {
        items: [],
        heading: "Hot Deals",
        dispatch: action => this.setState(state => reducer(state,action))
    }
    componentDidMount(){

        axios.get('https://enigmatic-bastion-32515.herokuapp.com/api/game/beer/0').then(res=>{
            this.setState({items : res.data})
            
        })
        .catch(e=>{
            console.log(e)
        })

    }

    render(){

        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )

    }
}

export const Consumer = Context.Consumer

