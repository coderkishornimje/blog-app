import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Reviews from './reviews';

function App(){
  return (
    <div className="App">
      <h1>Blog App</h1>
      <h4>The Latest About The World</h4>
      <Home/>
      <hr></hr>
      <h1>Reviews on Blogs given below</h1>
      <Reviews/>
    </div>
  );
}

export default App;
