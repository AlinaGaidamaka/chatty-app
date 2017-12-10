import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator, bindActionCreators } from 'redux';
import { fetchChat, createPost, currentUser } from '../actions';



import SelectedUserComponet from './selected_user';


class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            values:{ chatId : '', sender:'', post : '', date : '', time: '' }        
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
            
    componentDidUpdate() {
        this.scrollToBottom();
      }

    onInputChange(event){
        this.setState({
            values: {
                chatId: this.props.chat[0].chatId,
                sender: this.props.user,
                post : event.target.value,
                date : new Date().toLocaleDateString('en-GB'),
                time : new Date().toLocaleTimeString('en-GB')
            } 
          }); 
        }

    onFormSubmit(event){
        event.preventDefault();
        this.props.createPost(this.state.values, () => {
            this.props.fetchChat(this.props.chat[0].chatId);
        });
        this.setState({values: ''});
    }

    renderChat(){
        return this.props.chat.map((post)=>{
            return(
                <div key={post.id} 
                className={post.sender == this.props.user  ? 'box4 sb14' : 'box3 sb13'} >
                {post.post}
                <p className="text-right date">{post.date} - {post.time}</p>
                </div>
            );
        });
    }

    render(){

        if (!this.props.chat){
            return (<div>Please select chat</div>);
            }

        return(
            <div id="chat" className="col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding">
                <div id="userName"><SelectedUserComponet /></div>
                <div id="messages" className="scrollbar">
                    <div id="messagesBox" >
                        {this.renderChat()} 
                        <div ref={(el) => { this.messagesEnd = el; }} className="bottom"></div>
                    </div>
                    <div id="chatForm">
                        <form onSubmit={this.onFormSubmit} className="input-group">   
                            <input 
                            placeholder="Type a message"
                            className="form-control"
                            value={this.state.values.post}
                            onChange={this.onInputChange} />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn chatFormBtn">SEND</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { chat: state.chat, user: state.user};
}

export default connect (mapStateToProps, { createPost , fetchChat , currentUser }) (Chat);
