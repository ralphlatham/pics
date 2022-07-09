import React from 'react';
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
    onSearchSubmit(term) {
        console.log(term);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/*When you pass in a callback to a component you don't have to use names*/}
                {/*like onSubmit like you have to with JSX elements in the SearchBar.js file*/}
                <SearchBar customOnSubmit={this.onSearchSubmit}/>
            </div>
        );
    };
};

export default App;