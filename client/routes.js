import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Router } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
// // import history from './history';
import Root from './components/Root';
import Home from './components/Home';
import Map from './components/Map';
import UploadPic from './components/UploadPic';
// // import UserList from './components/User/UserList';
// // import UserDetail from './components/User/UserDetail';
// // import StoryList from './components/Story/StoryList';
// // import StoryDetail from './components/Story/StoryDetail';
// // import { fetchUsers } from './redux/users';
// // import { fetchStories } from './redux/stories';

// /* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

//   componentDidMount () {
//     this.props.fetchInitialData();
//   }

  render () {
    return (
      <HashRouter>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/upload" component={UploadPic} />
            <Route component={Home} />
          </Switch>
        </Root>
      </HashRouter>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchUsers());
//     dispatch(fetchStories());
//     // what other data might we want to fetch on app load?
//   }
// });

export default connect(mapProps)(Routes);
// export default connect(mapProps, mapDispatch)(Routes);

// <Route exact path="/users" component={UserList} />
// <Route path="/users/:id" component={UserDetail} />
// <Route exact path="/pictures" component={StoryList} />
// <Route path="/pictures/:id" component={StoryDetail} />
