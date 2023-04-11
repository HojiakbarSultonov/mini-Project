import React, { Component } from 'react'
import './SearchPanel.css'


class SearchPanel extends Component{
  constructor(props){
    super(props)
    this.state = {term:'' }
  }
upDateTermHandler = (e)=>{
  const term = e.target.value.toLowerCase()
this.setState({term})
this.props.upDateTermHandler(term)
}
  
  render(){
    return <input type="text" className='form-control searchInput' placeholder='Kinolarni qidirish' onChange={this.upDateTermHandler} value = {this.state.term}/>
  }
}


// function SearchPanel() {
//   return (
//     <div>
//         <input type="text" className='form-control searchInput' placeholder='Kinolarni qidirish'/>
//     </div>
//   )
// }

export default SearchPanel