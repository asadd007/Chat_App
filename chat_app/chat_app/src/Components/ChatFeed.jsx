import MyMsg from "./MyMsgjsx";
import ThereMsg from "./ThereMsg";
import MsgForm from "./MsgForm";
function ChatFeed(props) {
    // destructuring the props
   
    const {chats,activeChat,userName,messages}=props;
    const chat=chats && chats[activeChat];
    const renderMessages=()=>{
        const keys=Object.keys(messages);
        // const object1 = {
        //     a: 'somestring',
        //     b: 42,
        //     c: false
        //   };
        //   console.log(Object.keys(object1));
        //   // expected output: Array ["a", "b", "c"]
        return keys.map((key,index)=>{
               const message=messages[key];
               const lastMessageKey=index===0?null:keys[index-1];
               const isMyMessage=userName===message.sender.userName;
               return (
                   <div key={`msg_${index}`} style={{width:'100%'}}>
                   <div className="message-block">
                      {
                          isMyMessage?<MyMsg message={message}/>:
                          <ThereMsg message={message} lastMessage={messages[lastMessageKey]}/>
                      }
                   </div>
                       <div className="read-receipts" sytle={{marginRight: isMyMessage?'18px':'0px',
                       marginLeft: isMyMessage?'0px':'68px'}}>
                       </div>
                   </div>
               )
        })
    }
    return (
        <div className="chat-feed">
           <div className="chat-title-container">
               <div className="chat-title">
                   /* {chat?chat.title:null} */
               </div>
               <div className="chat-subtitle">
               </div>
               {renderMessages()}
               <div style={{height: '100px'}}></div>
               <div className="message-form-container">
               <MsgForm {...props} chatId={activeChat}/>
               </div>
           </div>
        </div>
    );
}
export default ChatFeed;