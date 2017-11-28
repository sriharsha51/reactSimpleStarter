 import React, {
     Component
 } from 'react';

 class SearchBar extends Component { // whenever we define a class component we should also define render() method which returns jsx
     constructor(props) {
         super(props);

         this.state = {
             term: ''
         };
     }
     // state is a plain javascript object that exists on any class based component. Each instance of class based component has its own copy of state.
     // we initialize the state by defining the constructor method and setting the state as this.state inside the construcctor function
     // everywhere else except in the constructor, we use this.setState to change our state.
     render() {
         return ( 
            <div>
              <input
                 value={this.state.term}
                 onChange={event => this.setState({ term: event.target.value })} />
            </div>
         );
     }
 }
// whenever there is a javascript variable inside the jsx, we wrap it with curly braces.
// A controlled component or element has its value set by state. So, its value only changes when its state changes.
export default SearchBar;