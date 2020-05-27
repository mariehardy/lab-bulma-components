import React from 'react';
import 'bulma/css/bulma.css';


const formatButton = (buttonStyle) => {
    return `${buttonStyle.isSuccess}`;
  }

const buttonStyle = {
    isPrimary: 'is-primary',
    isSuccess: 'is-success',
    isDanger: 'is-danger',
}

const CoolButton = (props) => {
    
    return (
      <div className='buttons'>
        <button className="button is-small is-rounded my-class" className={formatButton(buttonStyle)} >{props.title}</button>
        {/* <button className="button is-small is-success">Button 2</button> */}
      </div>
    );
  };

export default CoolButton;


{/* <div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div> */}

// is-primary, is-success, is-danger