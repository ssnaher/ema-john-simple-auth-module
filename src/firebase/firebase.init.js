import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.config"

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

------------------------

Step-2:
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

----------------------------------

Step 3:
1. Set up sign in method
2. setup sign out method
3. user state
4. special observer
5return necessary methods and states from useFirebase

-------------------------------

Step 4:
1. create a auth contxt
2. Create context Provider
3. use Auth Provider
4. Create useAuth Hook
5. Set Context Provider context value

-----------------------------------

Step 5: Create Private route
1. create private route
2. set private route

*/

