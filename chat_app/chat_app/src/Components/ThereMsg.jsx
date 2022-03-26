const ThereMsg=({lastMessage,message})=>{
    const isFirstMessageByUser=!lastMessage||lastMessage.sender.username!==message.sender.username;
    return(
        <div className="message-row"> 
           {
               isFirstMessageByUser &&(
                   <div className="message-avater" style={{backgroundImage:message.sender&& `url(${message.sender.avatar})`
                   }}/>
               )
           }
           {message.attachments && message.attachments.length>0
           ?(
            <img src={message.attachment[0].file}
             alt="message-attachment"
             className="message-image"
             style={{marginLeft: isFirstMessageByUser ?'4px':'48px'}}
             />
           ):(
            <div className="message" style={{float:'left',backgroundColor:"#CABCDC",marginLeft:isFirstMessageByUser?'4px':'48px'}}>
            {message.text.slice(3,message.text.length-4)}
        </div>
           )
           }
        </div>
    )
}
export default ThereMsg;