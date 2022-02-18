import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import axios from 'axios';
import Tree from 'react-d3-tree';
import reportWebVitals from './reportWebVitals';
let jsonstr= async() => {
	        var x= await axios({url: process.env.REACT_APP_GITADD + '?global=CARS',headers: {'origin': '*'}});
	        return x.data
}
export const API_ROUTE = jsonstr().then((data)=> {
	ReactDOM.render(
		  <React.StrictMode>
		    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
		                                                                     <Tree data={data} />
		                                                                         </div>
		  </React.StrictMode>,
		  document.getElementById('root')
	);

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
