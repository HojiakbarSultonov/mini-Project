import React, { Component } from 'react'
import './MoviesAddForm.css'


class MoviesAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      view: '',
    }}
  

  changeHandler = (e)=>{
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addFormHandler = (e)=>{
    e.preventDefault()
    this.props.addForm({name:this.state.name, viewers:this.state.view ,})
    this.setState({
      name:'',
      view: ''
    })
  }

  
  render(){

    const {name, view} = this.state
    // const {addForm} = this.props
    
    return (
      <div className='moviesAddForm'>
          <h3>Yangi kino qo'shish</h3>
          <form action="" onSubmit={this.addFormHandler} className="add_form d-flex">
              <input type="text" name='name' onChange={this.changeHandler} className="form-control newPostLabel" placeholder='Qanday kino' value={name}/>
              <input type="text" name='view' onChange={this.changeHandler} className="form-control newPostLabel" placeholder="Necha marta ko'rilgan" value={view}/>
              <button className='btn btn-outline-dark'>Qo'shish</button>
          </form>
      </div>
    )}}

  



// function MoviesAddForm() {
//   return (
//     <div className='moviesAddForm'>
//         <h3>Yangi kino qo'shish</h3>
//         <form action="" className="add_form d-flex">
//             <input type="text" className="form-control newPostLabel" placeholder='Qanday kino'/>
//             <input type="number" className="form-control newPostLabel" placeholder="Necha marta ko'rilgan"/>
//             <button className='btn btn-outline-dark'>Qo'shish</button>
//         </form>
//     </div>
//   )
//
 

  

export default MoviesAddForm