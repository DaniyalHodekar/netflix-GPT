import { useRef, useState } from "react";
import { validateEmailPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export default function Formsection() {
  const dispatch = useDispatch();
  const [signIn, setIsSignIn] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const passConfirmRef = useRef(null);
  const errorRef = useRef(null);
  const [passVisible, setPassVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  function handleSignInChange() {
    setIsSignIn(!signIn);
  }

  function handleSubmit(e, signIn) {
    //Validate the form data.
    e.preventDefault();
    let errors = validateEmailPassword(
      emailRef.current.value,
      passRef.current.value,
      passConfirmRef?.current?.value || "",
      nameRef?.current?.value || "",
      signIn
    );

    // console.log(errors);

    if (errors) {
      errorRef.current.innerText = errors;
    } else {
      errorRef.current.innerText = "";
      //Signed up successFully add auth logic here.
      if (!signIn) {
        //Sign up logic
        setSubmitting(true);
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameRef?.current?.value,
            }).then(() => {
              // Profile updated!
              dispatch(addUser(JSON.stringify(user)));
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            errorRef.current.innerText = "Error: " + errorCode;
            // ..
          })
          .finally(() => {
            setSubmitting(false);
          });
      } else {
        //Sign in Logic
        setSubmitting(true);
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passRef.current.value
        )
          .catch((error) => {
            const errorCode = error.code;
            errorRef.current.innerText = "Error: " + errorCode;
            // console.log(error);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }
    }
  }

  return (
    <section className="p-6 sm:p-14 bg-black/70 max-w-md mx-auto mt-12 rounded-lg mb-40">
      <form
        onSubmit={(e) => {
          handleSubmit(e, signIn);
        }}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-wide flex justify-between items-center">
          {signIn ? "Sign in" : "Sign up"}
          {submitting && (
            <div className="w-6 h-6 border-2 animate-spin border-t-transparent rounded-full"></div>
          )}
        </h1>
        <div className="flex flex-col">
          {!signIn && (
            <input
              aria-label="username input"
              type="text"
              ref={nameRef}
              placeholder="Username"
              maxLength={30}
              className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded  mb-4"
            />
          )}
          <input
            aria-label="email input"
            type="email"
            autoComplete="on"
            ref={emailRef}
            maxLength={40}
            placeholder="E-mail"
            className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded "
          />
          <input
            autoComplete="on"
            aria-label="password input"
            ref={passRef}
            type={passVisible ? "text" : "password"}
            placeholder="Password"
            maxLength={12}
            className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded mt-4 mb-4"
          />
          {!signIn && (
            <input
              autoComplete="on"
              aria-label="password confirm input"
              ref={passConfirmRef}
              type={passVisible ? "text" : "password"}
              placeholder="Confirm Password"
              maxLength={12}
              className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded  mb-4"
            />
          )}
          <div className="flex justify-between items-center gap-2">
            <p ref={errorRef} className="text-sm text-red-500"></p>
            <button
              type="button"
              className="text-sm mr-2"
              onClick={() => {
                setPassVisible(!passVisible);
              }}
            >
              {passVisible ? "Hide" : "Show"}
            </button>
          </div>

          <button
            disabled={submitting}
            className="p-3 mt-8 bg-red-700 font-semibold tracking-wide rounded md:hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none relative"
          >
            {signIn ? "Sign in" : "Sign up"}{" "}
          </button>

          <p className="mt-10">
            <span className="text-neutral-400">
              {signIn ? "New to NetflixGPT?" : "Already registered?"}
            </span>
            &nbsp;{" "}
            <button
              type="button"
              className="hover:underline"
              onClick={handleSignInChange}
            >
              {signIn ? "Sign Up now." : "Sign In."}
            </button>
          </p>
          <p className="text-sm leading-tight mt-3 text-neutral-400">
            This page is not protected by Google reCAPTCHA to ensure you&apos;re
            a bot.
          </p>
        </div>
      </form>
    </section>
  );
}
