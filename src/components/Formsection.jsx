import { useRef, useState } from "react";
import { validateEmailPassword } from "../utils/validate";

export default function Formsection() {
  const [signIn, setIsSignIn] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const passConfirmRef = useRef(null);
  const errorRef = useRef(null);
  const [passVisible, setPassVisible] = useState(false);
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
    }
  }

  return (
    <section className="p-6 sm:p-14 bg-black/70 max-w-md mx-auto mt-12 rounded-lg mb-40">
      <form
        onSubmit={(e) => {
          handleSubmit(e, signIn);
        }}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-wide">
          {signIn ? "Sign in" : "Sign up"}
        </h1>
        <div className="flex flex-col">
          {!signIn && (
            <input
              aria-label="username input"
              type="text"
              ref={nameRef}
              placeholder="Username"
              maxLength={15}
              className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded outline-none focus:bg-neutral-700 mb-4"
            />
          )}
          <input
            aria-label="email input"
            type="text"
            ref={emailRef}
            maxLength={40}
            placeholder="E-mail"
            className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded outline-none focus:bg-neutral-700"
          />
          <input
            aria-label="password input"
            ref={passRef}
            type={passVisible ? "text" : "password"}
            placeholder="Password"
            maxLength={12}
            className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded mt-4 outline-none focus:bg-neutral-700 mb-4"
          />
          {!signIn && (
            <input
              aria-label="password confirm input"
              ref={passConfirmRef}
              type={passVisible ? "text" : "password"}
              placeholder="Confirm Password"
              maxLength={12}
              className="bg-neutral-800 placeholder:text-neutral-400 p-3 px-5 rounded outline-none focus:bg-neutral-700 mb-4"
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

          <button className="p-3 mt-8 bg-red-700 font-semibold tracking-wide rounded md:hover:bg-red-800 disabled:opacity-70">
            {signIn ? "Sign in" : "Sign up"}
          </button>
          <p className="mt-10">
            <span className="text-neutral-400">
              {signIn ? "New to NetflixGPT?" : "Already registered?"}
            </span>
            &nbsp;{" "}
            <span
              className="hover:underline cursor-pointer"
              onClick={handleSignInChange}
            >
              {signIn ? "Sign Up now." : "Sign In."}
            </span>
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
