import React from "react";
import "./styles.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GooglePlacesAutocomplete
        debounce={800}
        apiKey="AIzaSyBz5yCJO-g0mIrJs-G4ALYlNNm29IBN3RkAIzaSyBz5yCJO-g0mIrJs-G4ALYlNNm29IBN3Rk"
        onSelect={console.log}
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
