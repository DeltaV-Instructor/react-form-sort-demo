import React from 'react'





let data = [1,2,3,4,5,6,7,8,9,10];

 class App extends React.Component{
  //constructor function 
  constructor(props){
    super(props);
    this.state = {
      //form take in a user name 

      //sort some data and store in state
    };
  }


  //helper function 

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit')
  }

  handleInput = (event) => {
    console.log(event.target.value);
  }

  handleSelect = () => {
    console.log('proof our select is firing!');
  }


  //forms that go in the return

  render() {

    return (
      <>
      <header> Forms in React</header>
      <form onSubmit={this.handleSubmit}>
        <label>User name
        <input type="text" name="userName" onChange={this.handleInput} />
        </label>
        <fieldset>
          <legend>Select Numbers</legend>
          <select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </select>
        </fieldset>
      <button type="submit">Submit</button>
      </form>





      </>
    )
  }
}


export default App;