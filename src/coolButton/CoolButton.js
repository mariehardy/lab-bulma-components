import React from 'react';
import 'bulma/css/bulma.css';


  // isPrimary: 'is-primary',
  // isSuccess: 'is-success',
  // isDanger: 'is-danger',
  // isRounded: 'is-rounded',


const CoolButton = (props) => {

  let classesArray = ["button"]

  if (props.isDanger === true) {
  classesArray.push("is-danger")
}
if (props.isSmall === true) {
  classesArray.push("is-small")
}

// SWITCH CASE !!!


    return (
        <button className={classesArray.join(' ')}>{props.title}</button>
    );
  };

export default CoolButton;


{/* <div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div> */}

// is-primary, is-success, is-danger