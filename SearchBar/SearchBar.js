import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: '',
            location:'',
            sortBy: 'best_match'
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);

        this.sortByOptions = {
            'Best Match' : 'best match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        };
    }
    
    getSortByClass(sortByOptions){
        if (this.state.sortBy === sortByOptions){
            return 'active';
        } 
        else{
            return '';
        }
    }

    handleSortByChange(sortByOptions){
        this.setState({sortBy : sortByOptions})
    }

    handleTermChange(e){
        this.setState({term : e.target.value})
    }

    handleLocationChange(e){
        this.setState({location : e.target.value})
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term, this.state.location,this.state.sortBy)
        e.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li 
            onClick = {this.handleSortByChange.bind(this, sortByOptionValue)}
            className = {this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue}>{sortByOption}</li>)
            
        });
    }
    render(){
        return( 
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
             <ul>
               {this.renderSortByOptions()}
             </ul>
        </div>
        <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange = {this.handleTermChange}/>
            <input placeholder="Where?" onChange = {this.handleLocationChange} />
         </div>
         <div className="SearchBar-submit">
            <button onClick = {this.handleSearch}>Let's Go</button>
         </div>
         </div>
         
         );
    }
}
export default SearchBar;