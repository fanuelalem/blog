import React, { Component } from "react";
// import Form from "./form"
import axios from "axios"
import PostUser from "./postUser";
// import PostForm from "./postForm"
 
class FormContainer extends Component {

state={
    users:[],
 }

componentDidMount = () => {

this.getUsers()


}

 

getUsers = () => {

    axios.get('http://localhost:8000/users')
    .then((response)=>{
        this.setState({
            users: response.data
        }, ()=>{
            console.log("form-container")
        })
    })
    .catch((e)=>{
        console.log(e)
    })
}

addUser = () => {



}

handleSubmit = (e) => {
    e.preventDefault()
}
handleInputChange = (e) => {

}

render () {
    
     return (
        <div>
<div className="container">
    <div className="row">
        <div className="col-12">
            <PostUser/>

     {this.state.users.map((item)=>(
   <h2 key={item.id}>{item.name} / {item.email}</h2> 
     ))}
    
         </div>
    </div>
</div>
            

        </div>
    )
}
}

export default FormContainer