import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';


function App() {
 
 
  const [message, setMessage] = useState("tunis");
  const baseURL = `http://api.aladhan.com/v1/calendarByCity?city=${message}&country=${message}&method=2&month=04&year=2022`;

  const [post, setPost] = React.useState(null);
  let myDate = new Date();
  let myDay = myDate.toDateString();


  
 

  const handleChange = (e) => {
    let myvalue = document.querySelector(".input");
    console.log(myvalue);

   

    console.log(message);
    setMessage(e.target.value);
    

  }


  React.useEffect(() => {
  
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, [baseURL]);

  if (!post) return null;
  // console.log(post.data[0]);
  return (
    <div className="App">
      <h2><span>{`Country: ${message} `}</span>{myDate.toTimeString().split(' ')[0]}</h2>
      <h2>{myDay}</h2>

      <hr />
      <div className="mySection">
        <Card post={post.data[0]} />
        {/* <Mycountry handleChange={handleChange}/> */}
        <input className="input"  type= "text"  required="" onChange={handleChange} />
      </div>

 
    </div>
  );
}

export default App;
