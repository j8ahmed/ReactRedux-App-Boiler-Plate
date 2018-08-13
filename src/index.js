import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//react-redux
const mapStateToProps = (state) => {
  return {
    title: state.title
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const AppContainer = () => {
	return(
		<Provider store={store}>
			<Container/>
		</Provider>
	);
};

ReactDOM.render(
	<AppContainer/>, document.getElementById('root'));
registerServiceWorker();
