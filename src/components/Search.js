import React from 'react';

class Search extends React.Component {

  filterUpdate() {
    this.props.filterUpdate(this.refs.textInput.value)
  }
  render() {
    return (
      <form>
        <input
          type='text'
          ref='textInput'
          placeholder="Filter"
          onChange={this.filterUpdate.bind(this)}
        />
      </form>
    );
  }
}
export default Search;