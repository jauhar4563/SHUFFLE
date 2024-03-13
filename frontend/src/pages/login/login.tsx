import { Link } from 'react-router-dom'

function Login(){
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}



      <div className="w-8/12 h-screen hidden lg:block">
        <div className="flex justify-start">
         <img src="../../../public/images/logo/shuffle.png" className=" w-32 m-3" alt="Logo" />
        </div>
     
        <img
          src="../../../public/images/Login img.png"
          alt="Placeholder Image"
          className="object-cover w-full  mt-16  -ml-80" 
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20  -ml-20 p-8 w-full lg:w-1/2">
        <div className='flex flex-col items-center'>
          <h1 className=" text-4xl font-semibold mb-2">Welcome Back</h1>
          <h1 className="text-lg font-normal mb-4">Login to your account</h1>
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
              placeholder='Email'
              name="username"
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
          <div className='flex justify-between mb-2'>

            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-small text-gray-900 dark:text-gray-300">Remember me</span>
            </label>
            {/* Forgot Password Link */}
            <div className="mb-6 text-sm text-red-500">
              <Link to="/forgot-password" className="hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-gradient-to-b from-purple-600 to-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 px-4 w-full"
          >
            Login
          </button>
      
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-sm  text-center">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 hover:underline">
           Sign up!
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login