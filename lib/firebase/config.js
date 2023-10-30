// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBmhU0bopRsBdDwoGw-9ZNFRxUb1n_m6RA",
	authDomain: "grovefilm-6532c.firebaseapp.com",
	projectId: "grovefilm-6532c",
	storageBucket: "grovefilm-6532c.appspot.com",
	messagingSenderId: "748922207761",
	appId: "1:748922207761:web:8de82e193aea7509063bb0",
	measurementId: "G-45FFZFRH0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
