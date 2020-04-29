import React from "react";
import "./styles.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import "react-google-places-autocomplete/dist/index.min.css";
export default function App() {

  const handleAddress = ({ description }) => {
    geocodeByAddress(description)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        console.log('Successfully got latitude and longitude', { lat, lng })
      )
      .catch(error => console.error(error));
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GooglePlacesAutocomplete
        debounce={800}
        apiKey="AIzaSyBolbxxZRC2pJgG7EUPTJkgaudxRyszZ_U"
        onSelect={handleAddress}
        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
          <div className="suggestions-container">
            {suggestions.map(suggestion => (
              <div
                className="suggestion"
                onClick={event => onSelectSuggestion(suggestion, event)}
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
}
