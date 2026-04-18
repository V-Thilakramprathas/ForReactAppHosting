import { useState } from 'react';
import Login from './Components/Login';
import Details from './Components/Details';
function App() {
  const [authendication, setAuthendication] = useState(false)
  if(!authendication){
    return (
      <>
        <Login setAuthendication={setAuthendication}/>
      </>
  );
  }
  else{
    return(
      <Details/>
    )
  }
  
}

export default App;
