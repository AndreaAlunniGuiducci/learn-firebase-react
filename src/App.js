import { useState, useEffect, cloneElement } from 'react';
import { db } from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import './firebase.js';

import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(collection(db, 'messages'), (collection) => {
        console.log(collection);
        const curentMessages = collection.docs.map((doc) => {
          const obj = {
            id: doc.id,
            ...doc.data()
          }
          return obj;
        })
        console.log(curentMessages);
        setMessages(curentMessages);
      });

      //VERSIONE STATICA
      // const querySnapshot = await getDocs(collection(db, 'messages'));
      // console.log(querySnapshot.docs);
      // const curentMessages = querySnapshot.docs.map(doc => {
      //   const obj = {
      //     id: doc.id,
      //     ...doc.data()
      //   }
      //   return obj;
      // })


      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data().text}`)
    };
    getData();
  }, [])



  return (
    <div className="App">
      <h1>Learn Firebase</h1>
      <ul>{messages.map((message, index) => {
        <li key={index}>
          <h2>{message.user}</h2>
          <p>{message.text}</p>
        </li>
      })}</ul>
    </div>
  );
}

export default App;
