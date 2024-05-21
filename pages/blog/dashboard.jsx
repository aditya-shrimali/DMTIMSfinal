import Link from 'next/link';
import {useRouter} from 'next/router';
import { useState ,useEffect,useContext} from 'react';

import { UserContext } from '../../store/UserContext';

const Dashboard = () => {


 const router = useRouter();
  // const { username, password } = router.query;
 const {userAuth:{access_token}} = useContext(UserContext)
 if (!access_token) {
  // Only redirect on the client-side
  if (typeof window !== 'undefined') {
    router.push('404');
  }
}
 
 


  return (
    <>
    <div className="mx-auto p-8 max-w-[768px]">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link legacyBehavior href={"create"}>
        {/* <Link legacyBehavior href={{ pathname: "create", query: { username, password } }}> */}

          <a className="border border-gray-300 rounded-md p-4 text-center hover:bg-gray-100">
            Create Post
          </a>
        </Link>
       
        {/* <Link legacyBehavior href={"edit"}>
          <a className="border border-gray-300 rounded-md p-4 text-center hover:bg-gray-100">
            Update Post
          </a>
        </Link> */}
       
        <Link legacyBehavior href={"delete"}>
          <a className="border border-gray-300 rounded-md p-4 text-center hover:bg-gray-100">
            Delete Post
          </a>
        </Link>
        {/* <Link legacyBehavior href={"home"}>
          <a className="border border-gray-300 rounded-md p-4 text-center hover:bg-gray-100">
            All Posts
          </a>
        </Link> */}
      </div>
    </div>
  
  </>
  );
};

export default Dashboard;
