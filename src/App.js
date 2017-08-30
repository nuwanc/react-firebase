import React, { Component } from 'react';
import Comments from './Comments';
import CommentsForm from './CommentsForm';

class App extends Component {
  render(){
    return (
      <div className='container'>
          <CommentsForm/>
          <Comments/>
      </div>
      )
  }
}

export default App;