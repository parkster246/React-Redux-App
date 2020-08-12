import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getPics } from './actions'
import Comics from './components/Comics'
import {Button} from 'reactstrap'
const App = (props) => {

const submitSearch = (e) => {
  e.preventDefault()
  props.getPics()
}




  return (
    <div className="App">
      <h1>Do you need a friend?</h1>
      <div>
      
      <Button color='primary'  onClick={submitSearch}>
        Click for a surprise!
      </Button>
    </div>   
    {props.isFetching && <p>loooooooading....</p>}   
        <Comics/>

    
    </div>
  );
}

const mapStateToProps = state => ({
  pics: state.pics,
  err: state.err,
  isFetching: state.isFetching
})
export default connect(
  mapStateToProps,
  {getPics}
)(App);
