import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(){ // we can also have constructor. 
    // if we have constructor, state should be defined within constructor only
    super(); // must call super() to use 'this' keyword
    console.log('Inside constructor');
    this.state = {
      trendingShowsList: [
        {
          id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false 
        },
        {
          id: 2, name: 'Planet Earth II', host: 'David Attenborough', isInWatchlist: false 
        },
        {
          id: 3, name: 'IPL 2022', host: 'Sourav Ganguly', isInWatchlist: false 
        },
        {
          id: 4, name: 'Man vs Wild', host: 'Bear Grylls', isInWatchlist: false 
        }
      ]
    }
  }

  handleAddToWatchlist( index) {
    console.log(index);
    
    // working with state immutably
    let showList = [ ...this.state.trendingShowsList ];
    showList[index].isInWatchlist = !showList[index].isInWatchlist; // toggling is in watchlist
    console.log(showList);
    this.setState( {
      trendingShowsList: showList
    });
  }

  render() {
    console.log('Inside Render');
    // ideal place for looping -- lists
    // ideal place for any comp specific transformations in JSX
    let showList = null;
    if(this.state.trendingShowsList && this.state.trendingShowsList.length > 0){
      showList = this.state.trendingShowsList.map( ( show, index ) => {
        console.log(show)
        console.log(index);
        return(
          <li className="list-group-item" key={index}>
            {show.id}. {show.name} | Host: {show.host}
            <button className='btn btn-success float-end' onClick={this.handleAddToWatchlist.bind(this, index)}>
              {show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'}
            </button>
          </li>
        )
      })
    }

    console.log('Before return');
    return (
      <div className='text-start'>
        <ul className="list-group list-group-flush">
          {/* Conditionals */}
          { 
            this.state.trendingShowsList &&  this.state.trendingShowsList.length > 0? 
            showList: 
            <div className='alert alert-warning'>No Trending shows found!</div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;