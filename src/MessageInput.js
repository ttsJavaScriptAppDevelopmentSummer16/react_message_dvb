import React, { Component } from 'react';
import {style} from './style'

class Message extends Component {
    render() {
        let user = this.props.obj.user;
        let time = this.props.obj.time;
        let text = this.props.obj.text;
        //For convenience hard coding current user
        let currentUser = "Dave"
        return (
                <li><u>{user}</u> <b>@</b> {time}  <b>said</b>  <h4 style={user === currentUser ? style.red : style.norm}>"{text}"</h4></li>
        );
    }
}

class Inputfield extends Component {
    render() {
        //Here is where refs came handy
        let getText = () => this.refs.adder.value;
        return (
            <div>
                <label htmlFor="in" style={style.main}>Message:
                    <input id="in" ref="adder" style={style.main} type="text" placeholder="Type a message here"/>
                </label>
                <button type="button" onClick={(e) => (this.props.addMsg(getText(), e))}>Send</button>
            </div>
        );
    }
}

export class MessageInput extends Component {
    constructor() {
        super();
        this.state = {
            msgs: [
                {
                    text: `Alright, HAL. I'll go in through the emergency airlock.`,
                    time: `4:33`,
                    user: `Dave`
                },
                {
                    text: `Without your space helmet, Dave? You're going to find that rather difficult.`,
                    time: `4:37`,
                    user: `HAL`
                },
                {
                    text: `HAL, I won't argue with you anymore! Open the doors!`,
                    time: `4:38`,
                    user: `Dave`
                },
                {
                    text: `Dave, this conversation can serve no purpose anymore. Goodbye.`,
                    time: `5:00`,
                    user: `HAL`
                }
            ],
            loadMore: false
        };
    }
    limitThree = (...tasks) => {
        let arry = tasks
        let count = arry[0].length
        if(count < 3){
            return arry;
        } else {
            return arry[0].splice(0,3);
        }
    }
    addMsg = (text, event) => {
        let arryMsgs = this.state.msgs
        //Here I would have a function to grab the time
        let time = `ERROR: CLOCK`
        //Here I would have a function to grab the currently logged in user
        let user = `Dave`
        let fullMessage = {text, time, user}
        arryMsgs.push(fullMessage)
        this.setState({msgs: arryMsgs, loadMore: false})
    }
    loadAll = (event) => {
        this.setState({loadMore: true})
    }
    render() {
        let current = this.state.msgs.map((obj, i) => <Message key={i} obj={obj} />);
        return (
            <div style={{paddingTop: '15%'}}>
                <h3 style={style.main}>React Message</h3>
                <br/>
                <Inputfield addMsg={this.addMsg} />
                <ul style={style.main}>{this.state.loadMore ? current : this.limitThree(current)}</ul>
                <button style={{marginLeft: '70%', hidden: this.state.msgs.length > 3}} type="button" onClick={this.loadAll}>Load More</button>
            </div>
        );
    }
}

Message.propTypes = { obj: React.PropTypes.object };
export default MessageInput;