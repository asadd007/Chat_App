const MyMsg=({message})=>{
      //console.log(message);
    if(message.attachments>0&& message.attachments.length>0)//checks message is image or video
    {
         return(
             <img src={message.attachment[0].file}
             alt="message-attachment"
             className="message-image"
             style={{float:'right'}}
             />
         );
    }
    return(
        <div className="my-message" style={{float:'right',marginRight:'18px',color:"white",backgroundColor:"#3B2A50"}}>
            {message.text.slice(3,message.text.length-4)}
        </div>
    );
};
export default MyMsg;