import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sign from './Sign';

class App extends Component {
  render() {
    return (
      <div>
          <Header title={ this.props.headerTitle }/>
          <Content title={ this.props.contentTitle }
                    body={ this.props.contentBody }/>
                    <Sign text="test" />
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'ReactJS Study',
  contentTitle: '회원가입 페이지',
  contentBody: '내용'
};

export default App;
