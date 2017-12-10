import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogInUsers, fetchUsers, currentUser } from '../actions';
import { bindActionCreator, bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class LogInPage extends Component {

    componentDidMount(){
        this.props.fetchLogInUsers();
    }

    renderUsers(){
        return _.map(this.props.usersLogIn, user => {
            return(
                    <Link to="/app"  key={user.id}>
                        <div className="col-md-12 logInUsers nopadding"
                        onClick={()=> {this.props.fetchUsers(user.id); this.props.currentUser(user.id)}}>                   
                            <img src={user.picture} className="img-circle" alt={user.name} />
                            <p className="text-center">{user.name}</p>
                        </div>
                    </Link>
            );
        });
    }

    render(){
        return(
            <div className="container-fluid logInUserBody">
                <div className="row text-center">
                    <div className="col-md-12 hearedLogInUsers">
                        <h1 className="one">CHATTY</h1>
                    </div>
                 {this.renderUsers()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { usersLogIn: state.usersLogIn };
}

export default connect (mapStateToProps, { fetchLogInUsers,  fetchUsers, currentUser })(LogInPage);
