import React, { Component } from 'react';
import {style} from './style'


class MessageInput extends Component {
    constructor() {
        super();
        this.state = {
            property : 0
        };
    }
  render() {
      let hideButton = true;
      let currentUser = 'Dave';
      let messages = [
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
      ];
      let highlightRed = (usr) => {
        if(usr===currentUser){
            return style.red;
        } else {
            return style.norm;
        }
      }

      let onlyThree = (...tasks) => {
            let arry = tasks;
            let count = arry[0].length
            if(count < 3){
                return arry;
            } else {
                return arry[0].splice(0,3);
            }
      }

      let hide = (...items) => {
          if(items.length < 3){
              hideButton = true;
              return hideButton;
          } else {
              hideButton = false;
              return hideButton;
          }
      }

      let current = messages.map((obj, i) => <li key={i}><u>{obj.user}</u> <b>@</b> {obj.time}  <b>said</b>  <h4 style={highlightRed(obj.user)}>"{obj.text}"</h4></li>);
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