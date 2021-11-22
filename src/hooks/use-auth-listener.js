import { useState, useEffect, useContext, createContext } from "react";
import { FirebaseContext } from "../context/firebase";


const AuthContext = createContext();

//Provider component that wraps your app and make auth object
//available to any child that calls auth()

export function ProvideAuth({ children }) {
   const auth = useProvideAuth();
   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

//Hooks for child components to get the auth object
//and re render when it changes
export const useAuth = () => {
   return useContext(AuthContext)
}


export default function useProvideAuth() {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null);

   const { Firebase } = useContext(FirebaseContext);

   // Wrap any Firebase methods we want to use making sure ...
   // ... to save the user to state.
   const Signin = ({ email, password }) => {
      return Firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then((res) => {
            setUser(res.user)
         })
   }
   
   const Signup = ({ email, password, firstName }) => {
      return Firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then((res) => {
            setUser(res.user)
            res.user.updateProfile({
               displayName: firstName,
               photoURL: Math.floor(Math.random() * 5) + 1,
            })
         })
   }

   
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
   useEffect(() => {
      const listener = Firebase.auth().onAuthStateChanged((authUser) => {
         if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser)
         } else {
            localStorage.removeItem('authUser');
            setUser(null);
         }
      });

      return () => listener();
   }, [Firebase])

   return { Signin, Signup, user }
}