import React from 'react';
// If we wanted to include the commented out axios in the onSearchSubmit function
// we would uncomment the import for axios below, but we have moved it into the
// unsplash.js file so we are importing that instead
//import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

// Functional component
//const App = () => {
//    return (
//        <div className="ui container" style={{ marginTop: '10px' }}>
//            <SearchBar />
//        </div>
//    );
//};

// Class component
class App extends React.Component {
    state = { images: [] };

    // This function is going to the SearchBar.js file
    // The first onSearchSubmit function is one solution to the binding problem on 'this' using an arrow function
    // where an arrow function is used on the SearchBar element further down the page
    // The second onSearchSubmit function is an alternative solution to the same problem 
    // where the arrow function is implemented on the onSearchSubmit function itself
    //async onSearchSubmit(term) {
    onSearchSubmit = async (term) => {
        // If we weren't specifying the base URL in our unsplash.js file we could include the
        // line of code below but we are so I'm using the subsequent line with the base URL removed
        //const response = await axios.get('https://api.unsplash.com/search/photos', {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            // Similar to the comment above about the base URL, this code has been moved
            // to the unsplash.js file so we don't have too much axios stuff in here
            //headers: {
            //    Authorization: 'Client-ID ZF1ScyX_cqnpNAuYuqLYjHdIKyPFeI9wYbBMUp7PckM'
            //}
        });

        //console.log(response.data.results);

            // This an alternative to the async await syntax that is actually being used
            //.then((response) => {
            //console.log(response.data.results);
        //});

        console.log(this);
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/*When you pass in a callback to a component you don't have to use names*/}
                {/*like onSubmit like you have to with JSX elements in the SearchBar.js file*/}
                {/*This callback is going to the SearchBar.js file*/}
                {/*The first SearchBar is one solution to the binding problem on 'this' using an arrow function*/}
                {/*The second SearchBar is an alternative solution to the same problem where the arrow function is*/}
                {/*implemented in the onSearchSubmit function further up the page*/}
                {/*<SearchBar customOnSubmit={(term) => this.onSearchSubmit(term)} />*/}
                <SearchBar customOnSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    };
};

export default App;