"use client"
import React from 'react';

class Chat extends React.Component {
    componentDidMount(){

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"19f37582840e5a816a01ee61df082d6d2","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    }
  render() {
    return <div>Chat component</div>;
  }
}

export default Chat;
