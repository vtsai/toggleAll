import './App.css';
import {useEffect, useState} from 'react';

const fetchEmails = () => {
  // imagine this is an API call that returns the payload asyncronously

  return new Promise((resolve, reject) => {
    resolve([
      {id: 'e1', title: 'email 1', from: 'john doe', to: 'me', desc: 'some text...'},
      {id: 'e2', title: 'email 2', from: 'jane doe', to: 'me', desc: 'some text...'},
      {id: 'e3', title: 'email 3', from: 'unknown', to: 'me', desc: 'some text...'},
    ]);
  });
}

const App = () => {
  // emails will be loaded by fetchEmails on mount
  const [emails, setEmails] = useState([]);
  // checkedEmails is a hashmap of email ids to preserve the checked state for each email
  const [checkedEmails, setCheckedEmails] = useState({});

  // initialize emails on mount using the fetchEmail function
  useEffect(() => {},[])

  // toggleAll handler to set each email to checked or unchecked
  const toggleAll = (e) => {
  }

  // email handler to set a single email to checked or unchecked
  const toggleOne = (e, id) => {
  }
  return (<div className="App">
            <div className="App-header">
              <div className="App-content">
                <div className="App-toggleAll">
                  <input
                    type="checkbox"
                    id="toggleAll"
                    data-testid="toggleAll"
                    /* checked={determine the checked value for toggleAll} */
                    onChange={toggleAll} />
                    <label className="App-label" htmlFor="toggleAll">Toggle All</label>
                </div>
                <div>
                  {emails.map(email =>
                    <div key={email.id}>
                      <input
                        type="checkbox"
                        id={email.id}
                        data-testid="emails"
                        /* checked={determine the checked value for an individual email} */
                        onChange={e => toggleOne(e, email.id)}/>
                      <label className="App-label" htmlFor={email.id}>{email.title}</label>
                    </div>)}
                </div>
              </div>
            </div>
          </div>);
}

export default App;
