import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyBGjF9nwlgRw4D7wrD3TJ0QQRadLfhs5Eg',
  authDomain: 'fir-pj-week7.firebaseapp.com',
  projectId: 'fir-pj-week7',
  storageBucket: 'fir-pj-week7.appspot.com',
  messagingSenderId: '703722892927',
  appId: '1:703722892927:web:bbe63ff05d9c028ebe194a'
}
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
