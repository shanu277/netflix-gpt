import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm,setIsSignForm] = useState(true);
const toggleForm = () => {
    setIsSignForm(!isSignInForm);
}

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="absolute p-12 bg-black bg-opacity-70 w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl px-2 py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>
        <button className="p-2 m-2 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="p-4 hover:cursor-pointer" onClick={toggleForm}>{isSignInForm ? 'New to Netflix? Sign Up now.' : 'Already Registered? Please Sign In Now'}</p>
      </form>
    </div>
  );
};

export default Login;
