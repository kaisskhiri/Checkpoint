import './App.css';
import React, { Fragment } from 'react';
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstImage from './Profilephoto';
import BasicExample from './Form';
import FullName from './Profile/FullName';
import Adress from './Profile/Adress';
function App() {

  return (
   <React.Fragment>
    <section className='Fond'>
         
          <FirstImage/>
          <FullName />
          <BasicExample />
          <Adress />
     </section>
    <section>
    <FirstImage/>
    <FullName />
    </section>
    </React.Fragment>
)
}

export default App;
