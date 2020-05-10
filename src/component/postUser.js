//  import React, { Component } from 'react'
// import Axios from 'axios';
 
// class PostUser extends Component {
//     state = {
//         name: '',
//         email:''
//     }
// handleChange = (event) => {
//     this.setState({name: event.target.value})
//     this.setState({email: event.target.value})

// }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const user= {
//             name:this.state.name,
//             email:this.state.email
//         }
//          Axios.post('http://localhost:8000/users', {user})
//         .then((response)=>{
//             console.log(response)
//             console.log(response.data)
//         })
//         .catch((e)=>{
//             console.log(e)
//         })
//     }
//      render() {
//          return (
//              <div>

// <form onSubmit={this.handleSubmit}>
//     <label> person name : 
//         <input onChange={this.handleChange} type="text" name="name"></input>
//         <input onChange={this.handleChange} type="text" name="email"></input>

//     </label>
//     <button type="submit"> add </button>
// </form>
                 
//              </div>
//          )
//      }
//  }
 
//  export default PostUser

import React, { Component } from 'react'
import axios from 'axios'

class PostUser extends Component {

    state = {
        userName:'',
        userEmail:'',
        users:[]
      }

      componentDidMount=()=>{
          this.getUsers()
      }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
        // this.setState({[event.target.email]:event.target.value})

    }

onSubmitHandler = (event) => {
event.preventDefault()
this.addUser()
}

addUser = () => {
      const userEmail = this.state.userEmail
     const userName = this.state.userName
     console.log(userName,userEmail)
     axios.post("http://localhost:8000/users", {userName,userEmail})
    .then((response)=>{
        this.getUsers()
        console.log(response)
    })
    .catch((e)=>{
        console.log(e)
    })
}

getUsers = () => {
console.log("getting users...")
    axios.get('http://localhost:8000/users')
    .then((response)=>{
        this.setState({
            users: response.data
        }, ()=>{
            console.log(this.state.users)
        })
    })
    .catch((e)=>{
        console.log(e)
    })
}

    render() {
        return (
            <div>
                <h1> simple CRUD API</h1>
                <button onClick={this.onSubmitHandler}>signup</button>
                <input onChange={this.onChangeHandler} value={this.state.userName} type="text" name="userName"></input>
                <input onChange={this.onChangeHandler} value={this.state.userEmail} type="text" name="userEmail"></input>
             </div>
        )
    }
}


export default PostUser





// addUser = () => {
//     console.log(this.state)
//     let URL = "http://localhost:8000/users"
//     // const user={ 
//     //     userName:this.state;
//     //     userEmail:this.state;
//     // }
 
//     // const user = {
//     //     userName: this.state.userName,
//     //     userEmail: this.state.userEmail}
//     // console.log(user.userName)
//     let data = this.state 
//      Axios.post(URL, data)
//     .then((response)=>{
//         // this.setState({userName,userEmail})
//     console.log(response)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
// }