import React from "react";
import './App.css';
import'./modified.css';
import Navbar from "./Navbar";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { email:'',name:'', age:null, address:'',phoneNo:'',lastName:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { email, name, age, address, phoneNo,lastName } = this.state
    
    event.preventDefault()
  
    alert(`
      ____Your Details____\n
      Email : ${email}
      Name : ${name}
      LastName: ${lastName}
      Age : ${age}
      Address : ${address}
      Phone No : ${phoneNo}
    `)
  }
  
  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
      <div className="full">
      <Navbar />
      <form className="w3-red w3-cell" onSubmit={this.handleSubmit}>
        <div className="w3-container container">
          <h1 className="w3-blue w3-block w3-teal heading">Form</h1>
        <div className="w3-container w3-blue">
          <label htmlFor='email'>Email</label>
          <input className="w3-input"
            name='email'
            placeholder='Email' 
            value = {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-container w3-blue">
          <label htmlFor='name'>Name</label>
          <input className="w3-input"
            name='name' 

            placeholder='Name'

            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-container w3-blue">
          <label htmlFor='name'>Name</label>
          <input className="w3-input"
            name='lastName' 
            placeholder='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-container w3-blue">
          <label htmlFor='age'>Age</label>
          <input className="w3-input"
            name='age' 
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-container w3-blue">
          <label htmlFor='address'>Address</label>
          <input className="w3-input"
            name='address' 
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-container w3-blue">
          <label htmlFor='phoneNo'>Phone Number</label>
          <input className="w3-input"
            name='phoneNo' 
            placeholder='Phone No'
            value={this.state.phoneNo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button className="w3-button w3-block w3-teal" >Create Account</button>
        </div>
        </div>
      </form>
      <div className="half2 w3-container w3-green w3-cell"> 
      <div className="w3-container w3-blue" id="r2">
      </div>
      </div>
      </div>
    )
  }
}
  
export default App;