
//import react into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'




//include your index.scss file into the bundle
import '../styles/index.css'




//import your own components
import Layout from './layout'



//
const root = createRoot(document.querySelector("#app"))
root.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);
//render your react application
root.render(<Layout/>)
/*import React from 'react';
import ReactDOM from 'react-dom';
import injectContext from './store/appContext';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

const App = injectContext(Layout);

ReactDOM.render(<App />, document.querySelector("#app"));*/
