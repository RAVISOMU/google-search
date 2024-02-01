import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  onSearch = event => {
    this.setState({userInput: event.target.value})
  }

  onSearchInput = suggestion => {
    this.setState({userInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {userInput} = this.state
    const filteredList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="bg-card">
            <div className="search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                value={userInput}
                placeholder="Search Google"
                className="search-input"
                onChange={this.onSearch}
              />
            </div>
            <ul className="list-container">
              {filteredList.map(eachSuggestion => (
                <SuggestionItem
                  eachSuggestion={eachSuggestion}
                  key={eachSuggestion.id}
                  onSearchInput={this.onSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
