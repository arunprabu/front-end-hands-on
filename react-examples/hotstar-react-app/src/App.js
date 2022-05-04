// 1. import statements 
// 2. component defn 
     // component should mandatorily return JSX
// 3. export 
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss'; // comp-specific css - but can be used in descendents
import Footer from './components/shared/Footer';
import Header from './components/shared/Header/Header';

import { routes } from './routes/AppRoutes';

// Ideal place for our layout 
// App component is called as root comp / main comp /default comp
function App() { // js   
  // returns JSX 
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <main style={{marginTop:'60px'}}>
          {/* ideal place for us to have router config */}
          <Suspense fallback={<div>Loading...</div>}>
            {routes}
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;