import React, { Component } from "react";
import AppInfo from "../app-info/AppInfo";
import AppFilter from "../appFilter/AppFilter";
import MovieList from "../movieList/MovieList";
import MoviesAddForm from "../moviesAddForm/MoviesAddForm";
import SearchPanel from "../searchPanel/SearchPanel";
import { v4 as uuidv4 } from "uuid";
// import User from '../../user'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Avatar", viewers: 811, favourite: false, id: 1, like: false },
        {
          name: "Sokin Hudud",
          viewers: 898,
          favourite: false,
          id: 2,
          like: false,
        },
        { name: "Yirtqich", viewers: 800, favourite: true, id: 3, like: false },
      ],
      term: "",
      filter: "All",
    };
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viewers > 800);
      default:
        return arr;
    }
  };

  upDateTermHandler = (term) => {
    this.setState({ term });
  };
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.view,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

upDateFilterHandler = filter=>{
  this.setState({filter})
}

  render() {
    const { data, term, filter } = this.state;
    const visibleDate = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );

    return (
      <div className="App font-monospace">
        <div className="content">
          <AppInfo />
          <div className="SearchPanel">
            <SearchPanel upDateTermHandler={this.upDateTermHandler} />
            <AppFilter upDateFilterHandler = {this.upDateFilterHandler}/>
          </div>
          <MovieList data={visibleDate} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
        {/* <User firstName = "Hojiakbar" surName="Sultonov"/> */}
      </div>
    );
  }
}

// function App() {

//   const data = [
//     {name:"Empire of Osman", viewers:811, favourite:false, id:1},
//     {name:"Ertugrul", viewers:898, favourite:false, id:2},
//     {name:"Omar", viewers:800, favourite:true, id:3},
//   ]

//   return (
//     <div className='App font-monospace'>
//       <div className='content'>
//         <AppInfo/>
//         <div className='SearchPanel'>
//           <SearchPanel/>
//           <AppFilter/>
//         </div>
//         <MovieList data={data} onDelete = {onDelete}/>
//         <MoviesAddForm/>
//       </div>
//       {/* <User firstName = "Hojiakbar" surName="Sultonov"/> */}
//     </div>
//   )
// }

export default App;
