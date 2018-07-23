import React from 'react';
import ReactDOM from 'react-dom';
import API_KEYS from '../apiKeys';

// const API_KEY = 'AIzaSyBN-yQQNYU6YVj4AYaQ2-1lWN7i75z2yQc';
const API_KEY = API_KEYS.youtube_API_KEY;
console.log('api key: ', API_KEY);


const App = () => {
    return <div>
        Hello World test
        </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));