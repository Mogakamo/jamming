import React from 'react'
import './SearchResults.css'
export class SearchResults extends React.Component {
    render(){
        return (
            <div className="SearchResults">{this.state.searchResults}
                <h2>Results</h2>
                {/*Add a Tracklist.component */}
            </div>
        )
    }
}