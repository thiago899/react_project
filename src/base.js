  import Rebase from 're-base'
  import firebase from 'firebase'
  
  var config = {
    apiKey: 'AIzaSyD4cc5FqwLGQjzX4ToCrBqP3uvbe2NxwOw',
    authDomain: 'bora-ajudar-3be24.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-3be24.firebaseio.com',
    projectId: 'bora-ajudar-3be24',
    storageBucket: 'bora-ajudar-3be24.appspot.com',
    messagingSenderId: '110519620689'
  };
  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())
  export default base
