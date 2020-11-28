// To try the state in a class component, leave the code as is and run npm start.
// To try the state in a functional component, comment OUT lines 5-47 and 
// comment IN lines 50-80. 


import React, { Component } from 'react'
import './style.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      blueCount: 0,
      redCount: 0
    }
  }

  handleBlueClick = () => {
    this.setState({
      blueCount: this.state.blueCount + 1
    })
  }

  handleRedClick = () => {
    this.setState({
      redCount: this.state.redCount + 1
    })
  }


  render() {
    return (
      <div className="buttonsBox">
        <div>
          <h3>Blue button clicked {this.state.blueCount}</h3>
          <button id="blue" onClick={this.handleBlueClick}>Click Me!</button>
        </div>
        <div>
          <h3>Red button clicked {this.state.redCount}</h3>
          <button id="red" onClick={this.handleRedClick}>Click Me!</button>
        </div>
      </div>
    )
  }
}

export default App

// import React, { useState } from 'react'
// import './style.css'

// function App() {

//   const [blueCount, setBlueCount] = useState(0)
//   const [redCount, setRedCount] = useState(0)

//   const handleBlueClick = () => {
//     setBlueCount(blueCount + 1)
//   }

//   const handleRedClick = () => {
//     setRedCount(redCount + 1)
//   }

//   return (
//     <div className="buttonsBox">
//       <div>
//         <h3>Blue button clicked {blueCount}</h3>
//         <button id="blue" onClick={handleBlueClick}>Click Me!</button>
//       </div>

//       <div>
//         <h3>Red button clicked {redCount}</h3>
//         <button id="red" onClick={handleRedClick}>Click Me!</button>
//       </div>
//     </div>
//   )
// }
// export default App











