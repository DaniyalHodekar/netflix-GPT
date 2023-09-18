const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export function validateEmailPassword(
  email,
  password,
  confirmPass,
  userName,
  signIn
) {
  //   console.log(email, password, confirmPass, signIn);
  if (signIn) {
    const emailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8 && password.length <= 12;
    if (!emailValid) return "Invalid Email";
    if (!isPasswordValid) return "Enter Valid Password";
    return null;
  } else {
    const emailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8 && password.length <= 12;
    const passWordMatch = password === confirmPass;
    const nameValid = userName.length >= 8;
    if (!nameValid) return "Username must be at least 8 characters.";
    if (!emailValid) return "Invalid Email";
    if (!isPasswordValid) return "Password must be between 8 and 12 characters";
    if (!passWordMatch) return "Entered Passwords dont match";
    return null;
  }
}
