import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser(JSON.stringify(user)));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        // console.log(user);
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return function () {
      unsubscribe();
    };
  }, []);

  return (
    <main className="text-white">
      <Outlet />
    </main>
  );
}
