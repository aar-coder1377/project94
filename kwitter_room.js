// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN-tgAJ2W1_Kz4LD1p21BAjXeW8ylXlW0",
    authDomain: "kwitterapp-29564.firebaseapp.com",
    projectId: "kwitterapp-29564",
    storageBucket: "kwitterapp-29564.appspot.com",
    messagingSenderId: "241328383398",
    appId: "1:241328383398:web:02e9bd1a012e773500db67",
    measurementId: "G-9EF8QESB6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   
      //End code
      });});}
getData();
