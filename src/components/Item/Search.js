import React, {Component} from 'react'
import {Consumer} from '../../context'
import Loading from '../Layouts/Loading'
import axios from 'axios'



 class Search extends Component{
     state={
         query:'',
         btn:'Search'
     }
     onChange(e){
         this.setState({query:e.target.value})

     }

     search = (dispatche,e) =>{
         e.preventDefault()
         this.setState({query:'',btn:'Searching...'})

         axios.get(`https://enigmatic-bastion-32515.herokuapp.com/api/game/allitems/search/${this.state.query}`).then(res=>{
            dispatche({type: 'SEARCH',payload:res.data})
            this.setState({btn:'Search'})
            
            
        })
        .catch(e=>{
            console.log(e)
        })
     }
    render(){

        return(
            <Consumer>
                {value =>{
                    
                    const {dispatch} = value
                     
                    return(
                        <form onSubmit={this.search.bind(this,dispatch)}>
                            <h3 style={{fontWeight:'100',marginBottom:'50px'}}>Find your drink</h3>
                            <div className="input-group mb-5">
                            <input type="text" class="form-control" name="query" value={this.state.query} onChange={this.onChange.bind(this)} placeholder="Search by name or brand" aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">{this.state.btn}</button>
                            </div>
                        </div>
                        </form>
                        
                    )
                }}
            </Consumer>
        )

    }
}

export default Search