import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* Left: Image */}



    <div className="w-8/12 h-screen hidden lg:block">
      <div className="flex justify-start">
       <img src="../../../public/images/logo/shuffle.png" className=" w-32 m-3" alt="Logo" />
      </div>
   
      <img
        src="../../../public/images/signup-img.png"
        alt="Placeholder Image"
        className="object-cover h-5/6  mt-10  -ml-60" 
      />
    </div>
    {/* Right: Login Form */}
    <div className="lg:p-36 md:p-52 sm:20  -ml-20 p-8 w-full lg:w-1/2">
      <div className='flex flex-col items-center'>
        <h1 className=" text-4xl font-semibold mb-2">Create Your Account</h1>
        <h1 className="text-lg font-normal mb-4">Signup to your account</h1>
      </div>
      <div className="rounded-t mb-0 px-6 py-6">
    
    <div className="btn-wrapper text-center">
      
      <button
        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-3 rounded-md outline-grey focus:outline-none mr-3 mb-5  uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
        type="button">
        <img
          alt="..."
          className="w-5 mr-1"
          src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
        />
        Google
      </button>
      <button
        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-3 rounded outline-none focus:outline-none mr-2 mb-5 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
        type="button">
        <img
          alt="..."
          className="w-5 mr-1"
          src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/189796.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcxMDU2NjgyMSwicSI6bnVsbCwiaWF0IjoxNzEwMzA3NjIxfQ__.8dd417f293cdb51b78ca03f00afa46060e5da27ccda18a4bf339545526024142"
        />
        Facebook
      </button>
    </div>
    <hr className="mt-6 border-b-1 border-blueGray-300" />

  </div>
      <form  action="#" method="POST">
        {/* Username Input */}
        <div className="mb-4">
         
          <input
            type="text"
            id="username"
            placeholder='Name'
            name="username"
            className=" w-full border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
          {/* Email Input */}
          <div className="mb-4">
         
         <input
           type="text"
           id="email"
           placeholder='Email'
           name="email"
           className=" w-full border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:border-blue-500"
           autoComplete="off"
         />
       </div>
        {/* Password Input */}
        <div className="mb-4">
          
          <input
            type="password"
            id="password"
            name="password"
            placeholder='password'
            className="w-full border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* Remember Me Checkbox */}
      <div className='flex mb-4'>
        <p className=' text-gray-500 text-xs'>By signing up you agree to our Terms of Service and Privacy policy and confirm that you are at least 18 years old</p>
      </div>
        {/* Login Button */}
        <button
          type="submit"
          className="bg-gradient-to-b from-purple-600 to-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 px-4 w-full"
        >
          Signup
        </button>
    
      </form>
      {/* Sign up Link */}
      <div className="mt-6 text-sm  text-center">
        You already have an account? 
        <Link to="/login" className="text-blue-500 hover:underline">
         Sign In!
        </Link>
      </div>
    </div>
  </div>
  </>
  )
}

export default Signup