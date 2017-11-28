import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//the name of the component should be same in the export statement, import statement and name of the component.

const API_KEY = 'AIzaSyCGuOXRYOfPEowxPfG4IoNelWwrww97c7c';

const App = () => { // multi line jsx expressions should be wrapped in paranthesis. if we do not mention paranthesis, it ll throw an error. 
    // otherwise we can also mention the first jsx element right next to return.
    return (
    <div>
        <SearchBar />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));