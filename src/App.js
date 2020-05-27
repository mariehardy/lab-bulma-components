import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolButton/CoolButton'
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="phone" type="number" placeholder="12345" />

      {/* <CoolButton /> */}
      <CoolButton className={buttonStyle.isSuccess} title="Button 33333" />

    </div>
  )
};

export default App;
