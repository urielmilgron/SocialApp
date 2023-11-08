import { getDatabase, ref, onValue } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJEkUduw-NWLlQNYoP9zisO04EzOyHbQ",
  authDomain: "reactnsocialapp.firebaseapp.com",
  databaseURL: "https://reactnsocialapp-default-rtdb.firebaseio.com",
  projectId: "reactnsocialapp",
  storageBucket: "reactnsocialapp.appspot.com",
  messagingSenderId: "403248860397",
  appId: "1:403248860397:web:1bc449490168a2702110e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//Conecto a los posts
const connectPostsDb = ref(db, 'posts');
const connectMsgDb = ref(db,'messages');

//Escucho los posts a traves de la función unsubscribe
const listeningPosts = (callback) => {
    const unsubscribe = onValue(connectPostsDb, (snapshot) => {
      const data = snapshot.val();
      // Manipula los datos según sea necesario
      callback(data);
    });
  
    return unsubscribe;
  };
  
  //Escucha los mensajes
  const listeningMessages = (callback) => {
    const messages = onValue(connectMsgDb, (snapshot) => {
      const dataMsg = snapshot.val();
      
      callback(dataMsg)
    })
    return messages
  }


  export { listeningPosts, listeningMessages };
