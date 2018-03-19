import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDJtSP23L42ZLHeNtTTyQltIB9Fz21jTT4',
  authDomain: 'framework-of-the-day.firebaseapp.com',
  databaseURL: 'https://framework-of-the-day.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
