import React, { Component } from 'react';
import UsersList from './users_list';
import Chat from './chat';



export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <UsersList />
            <Chat />
        </div>
    </div>
    );
  }
}
