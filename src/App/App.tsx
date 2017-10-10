import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setMenu, StoreState } from 'myRedux';
import { graphqlClient, MENU_QUERY } from 'myGraphql';

const logo = require('./logo.svg');

type OwnProps = {};

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps;

class App extends React.Component<Props> {

  async componentWillMount() {
    await graphqlClient.query({
      query: MENU_QUERY
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

type ReduxStateProps = StoreState['menuData'];

const mapStateToProps = (state: StoreState, props: OwnProps): ReduxStateProps => {
  return state.menuData;
};

type ReduxDispatchProps = {
  setMenu: typeof setMenu;
};
const mapDispatchToProps = (dispatch: Dispatch<{}>): ReduxDispatchProps => {
  return {
    setMenu: bindActionCreators(setMenu, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
