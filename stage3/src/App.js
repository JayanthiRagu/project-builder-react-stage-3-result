import './App.css';
import HomeComponent from './Component/HomeComponent';
import QuizComponent from './Component/QuizComponent';
import ResultComponent from './Component/ResultComponent';
import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      total:10,
      correct:0,
      wrong:0,
      attempt:0
    }
  }

  result=(resultCount,attempted)=>{
    this.setState({correct:resultCount,attempt:attempted,
      wrong:this.state.total-resultCount});
  }
  render(){
  return (
    <React.Fragment>
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <HomeComponent></HomeComponent>
                </Route>
                <Route path="/quiz">
                    <QuizComponent result={this.result}></QuizComponent>
                </Route>
                <Route path="/result">
                    <ResultComponent total={this.state.total} attempt={this.state.attempt} right={this.state.correct} wrong={this.state.wrong} ></ResultComponent>
                </Route>
            </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
