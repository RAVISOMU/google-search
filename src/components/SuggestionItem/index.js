import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onSearchInput} = props
  const {suggestion} = eachSuggestion

  const onUserClick = () => {
    onSearchInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onUserClick} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
