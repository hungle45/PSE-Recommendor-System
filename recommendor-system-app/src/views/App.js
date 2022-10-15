import logo from './../assets/images/logo.svg';
import './../styles/App.scss';
import Option from './Option/Option';
import RandomItem from './RandomItem/RandomItem';
import SimilarItem from './SimilarItem/SimilarItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='menu'>
          <Option></Option>
          <RandomItem></RandomItem>
        </div>

        <div className='content'>
          this is content
          <SimilarItem></SimilarItem>
          <SimilarItem></SimilarItem>
          <SimilarItem></SimilarItem>
          <SimilarItem></SimilarItem>
        </div>
      </header>
    </div>
  );
}

export default App;
