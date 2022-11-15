import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { clearUser, setUser } from "../features/authSlice";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../helper/Toastfy";
const firebaseConfig = {
  apiKey: "AIzaSyDjSI_ROzIdejIheZ2twAYT46njNDS-hKg",
  authDomain: "redux-app-85e9c.firebaseapp.com",
  projectId: "redux-app-85e9c",
  storageBucket: "redux-app-85e9c.appspot.com",
  messagingSenderId: "777502188729",
  appId: "1:777502188729:web:3ac62475f62cc342db2768",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    // SweetAlertsRegister();
    navigate("/home");
    console.log(userCredential);
  } catch (error) {
    // SweetAlertsError(error);
    console.log(error);
  }
};

// export const createUser = async (email, password, navigate, displayName) => {
//   try {
//     let userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     console.log(userCredential);
//     await updateProfile(auth.user, { displayName: displayName });

//     toastSuccessNotify("Registered is successfully!");
//     navigate("/home");
//   } catch (error) {
//     // toastErrorNotify(error.message);
//     console.log("hata mesajı");
//   }
// };
export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      console.log(user);
    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
};
export const logOut = (navigate, dispatch) => {
  signOut(auth);
  dispatch(clearUser());
  //   toastWarnNotify("logged out successfully");
  navigate("/");
};
export const signIn = async (username, email, password, navigate, dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      setUser({
        username: username,
        email: email,
        password: password,
      })
    );
    navigate("/home");
    toastSuccessNotify("Login successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};
export const signUpProvider = (navigate, dispatch) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      dispatch(
        setUser({
          displayName: user.displayName,
          email: user.email,
          // photoUrl: user.photoUrl,
        })
      );
      navigate("/home");
      // toastSuccessNotify("Login successfully!!");
    })
    .catch((error) => {
      // Handle Errors here.
      toastErrorNotify(error);
    });
};