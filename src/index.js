import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Home';
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <Index/>
        </GlobalStyles>

    </React.StrictMode>,
    document.getElementById('root')
);

