// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. Creating the state and setting userInput to a blank string
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Takes the input from the on change event and updates userInput in state with what was written
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.Deconstructing the userInput from state to use as a variable in the jsx below
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. An event that runs the function whenever the input has changed*/}
          onChange={ this.robot }
          {/* 5. Assigns the userInput to value, so that it can be referanced in the robot function*/}
          value={ userInput }
        />

        <div>
          {/* 6. We are rendering the Robot components, and passing them the userInput */}
          <GoodRobot
            {/* 7.Passing the userInput from  */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.Create a div to hold the text elements to display the content inside of them when the component is rendered.
      <div>
        <h3>Good Robot</h3>
        {/* 9. Inserts the users input via props into the phrase */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Exporting GoodRobot so that App.js can call it
export default GoodRobot
