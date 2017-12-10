import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchChat, selectedUser } from '../actions';
import { bindActionCreator, bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            classes: {
                classNameUsers:"col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding",
                classNameIcon:"fa fa-chevron-left hidden"
            }
        };
    }

    renderUsers(){
        return _.map(this.props.users, user => {
            return(
                <li 
                className="list-group-item text-left sharpUsersr" 
                key={user.id} 
                onClick={()=>{this.props.fetchChat(user.chatId); this.props.selectedUser(user.id)}}>
                <img src={user.picture} className="img-circle imageUser" alt={user.name}/>
                {`   ${user.name}`}
                </li>
            );
        });
    }

    addClassNameHidden() {
        this.setState({
            classes : {
                classNameUsers : "col-lg-4 col-md-4 hidden-sm hidden-xs nopadding",
                classNameIcon : "pull-left fa fa-chevron-left fa-1x hidden-lg hidden-md"
            }
        });
    }

    addClassNameShow() {
        this.setState({
            classes : {
                classNameUsers : "col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding",
                classNameIcon : "fa fa-chevron-left hidden"
            }
        });
    }

    render(){
        return(
            <div>
                <div id="header" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div><i className= {this.state.classes.classNameIcon} 
                        aria-hidden="true" 
                        onClick={this.addClassNameShow.bind(this)}></i>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <i className="pull-left fa fa-arrow-left fa-2x hidden-sm hidden-xs" aria-hidden="true"></i>
                        </Link>
                        <h1 className="one">CHATTY</h1>
                        </div> 
                </div>
                <div id="users" className={this.state.classes.classNameUsers} 
                onClick={this.addClassNameHidden.bind(this)}>
                    <div id="user" className="scrollbar">
                        <ul className = "list-group">
                            {this.renderUsers()}
                        </ul>
                    </div>
                </div>
            </div>


        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}


export default connect (mapStateToProps, { fetchChat, selectedUser })(UsersList);