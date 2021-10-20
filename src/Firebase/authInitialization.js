import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const authInitialize = () => {
  initializeApp(firebaseConfig);
};
export default authInitialize;
