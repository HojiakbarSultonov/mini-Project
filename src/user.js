import { Component } from "react";

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0,
            age: ''
        }
    }

    clickHandler = ()=>{
        this.setState({
            counter:this.state.counter + 1
        })
    }
    handlerChange = (e)=>{
        this.setState({
            age:e.target.value
        })
    }
 
    render(){
        const {firstName, surName} = this.props
        return(
           <div className="container w-50 mx-auto">
             <div className="border p-3 mt-5">
               <h1>Mening ismim {firstName}</h1>
                <h1>Mening ismim {surName}</h1>
                <div className="mt-3">
                    <button onClick={this.clickHandler} className="btn btn-success">Click</button>
                    <button onClick={this.clickHandlerMinus} className="btn btn-primary">Click</button>
                    <button onClick={this.clickHandlerRes} className="btn btn-info">Click</button>
                    <p>{this.state.counter}</p>
                </div>
                <span>Yoshiz: {this.state.age}</span>
                <input type="number" onChange={this.handlerChange} />
            </div> 
           
           </div>
        )
    }
}
export default User