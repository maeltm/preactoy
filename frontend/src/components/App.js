import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Sign from './Sign';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
          <Header title={ this.props.headerTitle }/>
          <Content title={ this.props.contentTitle }
                    body={ this.props.contentBody }/>
          <Sign text="test" />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'ReactJS Study',
  contentTitle: '회원가입 페이지',
  contentBody: 'Default contentBody'
};

export default App;
<Sign text="test" />