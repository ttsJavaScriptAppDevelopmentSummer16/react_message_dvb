import React, { Component } from 'react';
import {style} from './style'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            user: '',
            time: ''
        };
    }
    render() {
        return (
            <div>
                <li><u>{this.user}</u> <b>@</b> {this.time}  <b>said</b>  <h4 style={this.props.highlightRed(this.user)}>"{this.text}"</h4></li>
            </div>
        );
    }
}

class inputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textVal: ''
        };
    }
    render() {
        return (
            <div onClick={this.tick}>
                Clicks: {this.state.count}
            </div>
        );
    }
}

export class MessageInput extends Component {
    constructor(props) {
        super(props);
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
            ]
        };
    }
    hide = (...items) => {
        if(items.length < 3){
            hideButton = true;
            return hideButton;
        } else {
            hideButton = false;
            return hideButton;
        }
    }

    render() {

        return (
            <div style={{paddingTop: '15%'}}>
                <h3 style={style.main}>React Message</h3>
                <br/>
                <label htmlFor="in" style={style.main}>Message:
                    <input id="in" style={style.main} type="text"/>
                </label>
                <button type="button">Send</button>
                <ul style={style.main}>{onlyThree(current)}</ul>
                <button style={{marginLeft: '75%', hidden: hide()}} type="button">Load More</button>
            </div>
        );
    }
}
export default MessageInput;