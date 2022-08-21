// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCucyrCfwqQc4HYSF_ja9f8Fn_e9mZgkVw",
	authDomain: "ankasa-bypass.firebaseapp.com",
	databaseURL: "https://ankasa-bypass-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "ankasa-bypass",
	storageBucket: "ankasa-bypass.appspot.com",
	messagingSenderId: "327495340187",
	appId: "1:327495340187:web:c0ed2c14278dfa897ef63e",
	measurementId: "G-S1TRNZ0XS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
