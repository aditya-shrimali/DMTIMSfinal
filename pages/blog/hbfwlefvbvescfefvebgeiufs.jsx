import React, { useContext, useEffect ,useState} from "react";
import { redirect, useRouter } from 'next/navigation'

import { storeInSession } from "../../store/session";
import { UserContext } from "../../store/UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const {userAuth:{access_token},setUserAuth} = useContext(UserContext);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter()
  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    
      const fetchData = async () => {
       
        const credentials = {
          username: username,
          password: password,
        };
  
        try {
          const response = await fetch(
            // "http://localhost:8000/blog/login",
            // "https://blogbackend.dmtims.edu.in/blog/login",
            "https://dmtims.edu.in/nodeapi/blog/login",
            {
              
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );
          const data = await response.json();
          // console.log("Data",data);
          storeInSession("user", JSON.stringify(data));
          setUserAuth(data);
          // console.log(data);

          if(response.ok)
            {

              toast.success("Login Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
          
                });   
            }

          if(!response.ok)
            {
              toast.error("Wrong username and password", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
          
                });  
            }

        } catch (error) {
          console.log("Error:", error);
          
        }
      };
  
      fetchData(); // Call the function when the component mounts
  
 

  }

  // console.log(access_token)
  if(access_token)
    {
      router.push('dashboard');
    }

  return <div> <div className="mx-auto p-8 max-w-[768px]">
  <h1 className="text-3xl font-bold mb-4">Login</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Enter your username"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Enter your password"
        required
      />
    </div>
    {error && <div className="text-red-500">{error}</div>}
    <div>
      <button
        type="submit"
        
        
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  </form>
  
</div></div>;
};

export default Login;
