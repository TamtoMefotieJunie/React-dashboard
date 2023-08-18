import "../css/navbar.css";

function Contact(){
    return(
    <>  
    <div className="chatlist" id="chatList">
         <div className="chat-list-content" id = "content" onclick = "click_Div()">
            <div className="userImage1"></div>
                <div className="chat-detail">
                     <p className = "chatname" >Chatgram </p> 
                     <span className="text">chatgram web was updated</span>
                </div>
                <div className="chat-time">
                    <div>19:48</div>
                    <div className="unread-messages">1</div>
                </div>  
        </div> 
    </div> 
    </>
    );
} 
export default Contact;
