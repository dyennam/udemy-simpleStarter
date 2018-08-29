import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    // this.onInputChange = this.onInputChange.bind(this);
  }
  

  onInputChange(event, valueName) {
    this.setState({
      [valueName]: event.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            SearchBar:
            <input
              id='term'
              onChange={event => this.onInputChange(event, 'term')}
            />
          </div>
          <div>
            Value of input: {this.state.term}
          </div>
        </div>
      </div>
    )
  };
}

export default SearchBar;
