// Fn comp with Arrow Fn 

import React from 'react'
import ChannelList from '../../containers/ChannelList';
import LifeCycleDemo from '../../containers/LifeCycleDemo';
import TrendingShows from '../../containers/TrendingShows';
import Subscription from './Subscription/Subscription';
import AccountInfo from '../../containers/AccountInfo';
import WithLastLogin from '../../hoc/withLastLogin';
import Program from './Program';
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to Home Page!</title>
      </Helmet>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://developer.asustor.com/uploadIcons/0020_999_1600669622_Disney_Hotstar_256.png"
          alt="Hotstar logo"
          width={256}
          height={256}
        />
        <h1 className="display-5 fw-bold">Welcome to Hotstar App!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Watch movies, tv shows on Smartphone, TV and Laptop.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Renew
            </button>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2>Featured Programs | Props - Demo</h2>
        <Program name="Man Vs Wild" 
                time='8 PM'
                category="Infotainment">
          A Wild Adventure Program hosted by Bear Grylls
        </Program>
        <Program name='Planet Earth' 
                time='1 PM'
                category="Infotainment">
          A Show hosted by David Attenborough on BBC Earth
        </Program>
        <Program name='IPL 2022 - RCB vs CSK' 
                time='7.30 PM'
                category="Sports">
          IPL Cricket 2022
        </Program>
        <hr />

        <h2>Channel List | States, Events - Demo</h2>
        <ChannelList />
        <hr />

        <h2>Trending Shows | States, Mutating States, Events, Lists, Keys, Conditional Rendering - Demo</h2>
        <TrendingShows />
        <hr/>
        
        <h2>Subscription | Styling</h2>
        <Subscription endsOn="20/June/2022"/>
        <hr />

        <h2>Lifecycle Hooks Demo</h2>
        <LifeCycleDemo />
        <hr />

        <h2>Account Info | Two Way Binding</h2>
        <AccountInfo />
        <hr />

        <h2>Last Login | HOC - Demo</h2>
        <WithLastLogin>
          <p>Last Login: 21/March/2022</p>
          <p>Updated on: 6 PM yesterday</p>
        </WithLastLogin>

        <WithLastLogin>
          <p>Do you want to signout?</p>
        </WithLastLogin>

        <hr />
      </div>

      
    </div>
  )
}

export default Home;