import React from 'react'
import './AppFilter.css'
function AppFilter({upDateFilterHandler}) {
  const btnsArr = [
    {name: 'All', label:"Barcha kinolar"},
    {name: 'popular', label:"Mashhur kinolar"},
    {name: 'mostViewers', label:"Eng ko'p ko'rilgan  kinolar"},
  ]
  return (
    <div className='btn-group'>
      {btnsArr.map(btn=>(
        <button key={btn.name} className = "btn btn-dark" onClick={()=>upDateFilterHandler(btn.name)}>{btn.label}</button>)
      )}
      {/* // <button className='btn btn-dark'>Barcha kinolar</button>
      // <button className='btn btn-outline-dark'>Mashhur kinolar</button>
      // <button className='btn btn-outline-dark'>Eng ko'p ko'rilgan  kinolar</button> */}
    </div>
  )
}

export default AppFilter 