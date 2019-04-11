import React from 'react'

class SearchBar extends React.Component {
  state = { searchTerm: '' }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              Videosuche
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
    console.log('onFormSubmit')
    //todo: call callback from parent component
  }
}

export default SearchBar
