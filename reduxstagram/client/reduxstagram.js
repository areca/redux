import React from 'react';
import {render} from 'react-dom';
import Main from './components/Main';

//Import css
import css from './styles/style.styl';

render(<Main><p>hello</p></Main>, document.getElementById('root'));
