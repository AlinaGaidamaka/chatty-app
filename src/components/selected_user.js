import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedUser } from '../actions';
//import { bindActionCreator, bindActionCreators } from 'redux';


class SelectedUserComponent extends Component {

    render(){
        if (!this.props.selectedUser[0]){
            return (<div></div>);
            }
        return(
            <div>
                <img src={this.props.selectedUser[0].picture} 
                className="img-circle imageUser" 
                alt={this.props.selectedUser[0].name}/>
                {this.props.selectedUser[0].name}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { selectedUser: state.selectedUser };
}

export default connect (mapStateToProps)(SelectedUserComponent);
