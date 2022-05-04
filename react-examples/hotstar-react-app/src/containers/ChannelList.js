// import statement
// class defn 
  // should have a mandatory render() method 
  // render() method should also return JSX

// export 

import React, { Component } from "react";


// class comp should extend Component from react. 
// only then render method will be called automatically

class ChannelList extends Component { // inheriting React.Component

  // Let's have the data within the class comp in state
  /* state is an object 
   * state is mutatable -- but do not mutate state directly
   * use setState() to mutate the state. 
   * whenever state is mutated using setState() render method will be called.
   * so that you can get the UI updated 
   * setState() will merge state data with other existing properties
   * Notable problem of mutating state -- will result in re-rendering cycle.
  */

  state = {
    tvChannelList: [
      { name: 'Star Sports 1', 
        info: '#1 Sports Channel in India', 
        imgURL: 'https://via.placeholder.com/250x150',
      },
      { name: 'Nat Geo', 
        info: '#1 Infotainment Channel in India', 
        imgURL: 'https://via.placeholder.com/250x150'
      },
      { name: 'BBC Earth', 
        info: 'Best Infotainment Channel in India', 
        imgURL: 'https://via.placeholder.com/250x150'
      }
    ],
    channelResolution: 'HD'
  }

  // method to handle event 
  handleAddToFav = (event) => {
    console.log(event); // react will bake a synthetic event object
    console.log(this);
    // mutating the state
    console.log(this.state);
    // mutating state directly like this will not update the UI. This is not recommended
    // this.state.tvChannelList[0].name = 'Star Sports 1 [Added]'; 
    
    // mutating state using setState() -- Recommended
    // This will update the UI. will invoke render method whenever state is mutated using setState()
    this.setState({
      tvChannelList: [
        { name: 'Star Sports 1 [Added]', 
          info: '#1 Sports Channel in India', 
          imgURL: 'https://via.placeholder.com/250x150',
        },
        { name: 'Nat Geo', 
          info: '#1 Infotainment Channel in India', 
          imgURL: 'https://via.placeholder.com/250x150'
        },
        { name: 'BBC Earth', 
          info: 'Best Infotainment Channel in India', 
          imgURL: 'https://via.placeholder.com/250x150'
        }
      ]
    })
  }

  // mandatory render method
  render(){
    // should return JSX
    return(
      <div>
        <p>Total Number of Channels: {this.state.tvChannelList.length}</p>
        <p>Channel Resolution: {this.state.channelResolution} </p>

        <div className="row"> 
          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[0].imgURL} className="card-img-top" 
              alt={this.state.tvChannelList[0].name} />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[0].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[0].info}
                </p>
                {/* Handling events in React  */}
                <button className="btn btn-primary" 
                  onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>       

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[1].imgURL} className="card-img-top" 
              alt={this.state.tvChannelList[1].name} />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[1].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[1].info}
                </p>
                <button className="btn btn-primary">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>       

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[2].imgURL} className="card-img-top" 
              alt={this.state.tvChannelList[2].name} />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[2].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[2].info}
                </p>
                <button className="btn btn-primary">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>        
          
        </div>
      </div>
    )
  }
}

export default ChannelList;