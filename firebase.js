import Firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDwLQjox3YNKJLjon5j4GsWQ10SXQl2ldU",
	authDomain: "expenses-85c76.firebaseapp.com",
	databaseURL: "https://expenses-85c76.firebaseio.com",
	projectId: "expenses-85c76",
	storageBucket: "expenses-85c76.appspot.com",
	messagingSenderId: "708536712183"
};

const app = Firebase.initializeApp(config);

export default app.database();
