import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolButton/CoolButton'
import { render } from 'react-dom';
import 'bulma/css/bulma.css';


const App = () => {
  const buttonStyle = {
    isPrimary: 'is-primary',
    isSuccess: 'is-success',
    isDanger: 'is-danger',
}
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="phone" type="number" placeholder="12345" />

      {/* <CoolButton /> */}
      <CoolButton className={buttonStyle.isSuccess} title="Login" />
      <CoolButton className={buttonStyle.isDanger} title="Sign up" />

    </div>
  )
};

export default App;
