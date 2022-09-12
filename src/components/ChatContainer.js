import React, { Component } from "react";
import ChatMessasges from "./ChatMessages";
import InputMessage from "./Inputmessage";
import ChatHeader from "./ChatHeader";
import { postContent } from "../chat-service";
class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }
  state = {
    messages: [
      {
        message: "Type book a car to see bot in action",
        type: "bot"
      }
    ]
  };

  _scrollIntoView = () => {
    const element = this.scrollRef.current;
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    element.scrollTop += 20;
  };
  handleAddMessage = message => {
    this.setState(
      prevState => {
        return {
          messages: [...prevState.messages, { message, type: "user" }]
        };
      },
      () => {
        this._scrollIntoView();
      }
    );
    postContent(message)
      .then(res => {
        const { message } = res;
        this.setState(prevState => {
          return {
            messages: [...prevState.messages, { message, type: "bot" }]
          };
        }, this._scrollIntoView);
      })
      .catch(err => {
        console.log("error occured", err);
      });
  };
  render() {
    const { messages } = this.state;
    return (
      <div className="chat-container card">
        <ChatHeader />
        <ChatMessasges ref={this.scrollRef} messages={messages} />
        <InputMessage handleAddMessage={this.handleAddMessage} />
      </div>
    );
  }
}
export default ChatContainer;
