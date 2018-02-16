import React from 'react'

const Message = ({ message, toggleRead, toggleStarred, toggleSelected }) => {
    return (
        <div className="row message unread">
            <div className="col-xs-1">
                <div className="row">
                <div className="col-xs-2">
                    <input 
                        type="checkbox" 
                        checked={message.selected} 
                        onChange={() => toggleSelected(message)} 
                    />
                </div>
                <div className="col-xs-2">
                    <i 
                        className="star fa fa-star-o" 
                        onClick={() => toggleStarred(message)} 
                    >
                    </i>
                </div>
                </div>
            </div>
            <div 
                className="col-xs-11" 
                onClick={() => toggleRead(message) } 
            >
                <a href="#">
                    {message.subject}
                </a>
            </div>
        </div>
    )
}

export default Message