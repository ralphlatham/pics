import React from 'react';

class SearchBar extends React.Component {
    // Alternative to 'on' is 'handle' i.e. handleInputChange but it is the same thing
    //onInputChange(event) {
    //    console.log(event.target.value);
    //};

    state = { term: '' };

    //onInputClick() {
    //    console.log('Input was clicked');
    //};

    // This commented out line of code below will throw an undefined error as 'this' does not exist
    // To fix it we can use a constructor and a 'bind' function (no example included here sorry)
    // Alternatively, we can change it into an arrow function like the commented out line below
    // working in conjunction with the commented out form element further down.
    // Another solution is to change the onFormSubmit function in the form JSX
    // element into an arrow function (look at the code in the render() function
    // to see this solution)
    // Arrow functions automatically bind 'this' for all the coode inside the function
    //onFormSubmit(event) {
    onFormSubmit = (event) => {
        event.preventDefault();

        /*console.log(this.state.term);*/

        // This function is coming from the App.js file
        this.props.customOnSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">                
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/*The commented out line of code below is an example of how to resolve an issue where the input is flagged as*/}
                {/*undefined as 'this' does not exist. It solves this by using an arrow function on the onFormSubmit function*/}
                {/*<form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">*/}
                    <div className="field">
                        <label>Image Search</label>
                        {/*Leave off the parantheses onInputChange otherwise it will*/}
                        {/*be called every time the SearchBar is rendered*/}
                        {/*we only want to call it on change*/}
                        {/*<input type="text" onChange={this.onInputChange} />*/}

                        {/*Example of an onClick event*/}
                        {/*<input type="text" onClick={this.onInputClick} onChange={this.onInputChange} />*/}

                        {/*'e' is a shortened version of 'event'*/}
                        {/*<input type="text" onChange={(e) => console.log(e.target.value)} />*/}

                        {/*The above are uncontrolled elements*/}
                        {/*Below is an example of a controlled element using state*/}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;