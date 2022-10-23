import './../styles/App.scss';
import RandomItem from './RandomItem';
import SimilarItem from './SimilarItem';
import React from "react";



class App extends React.Component {
  state = {
    buy_tgt: [],
    uucf: [],
    start: true,
    random_id: '',
  }


  setStart = (value) => {
    this.setState({
      start: false
    })
  }
  setRandomId = (id, data) => {
    this.setState({
      random_id: id,
      buy_tgt: data.buy_tgt.split(" "),
      uucf: data.uucf.split(" ")
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <RandomItem
            start={this.state.start}
            setRandomId={this.setRandomId}
            setStart={this.setStart}
          />


          <div className='content'>
            {this.state.start ? <></> : <>
              <SimilarItem
                title="Using buy_tgt"
                array_item_id={this.state.buy_tgt}
              />
              <SimilarItem
                title="Using user-user collaborative filtering"
                array_item_id={this.state.uucf}
              />
            </>}

          </div>
        </header>
      </div>
    );
  }
}

export default App;
