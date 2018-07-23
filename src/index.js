import React from 'react';
import ReactDOM from 'react-dom';
import API_KEYS from '../apiKeys';
import SearchBar from './components/search_bar'; 

const API_KEY = API_KEYS.youtube_API_KEY;


const App = () => {
    return <div>
        Hello World
        <SearchBar />
        </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));