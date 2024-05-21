
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image'
import parse from 'html-react-parser';

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await fetch('http://localhost:8000/blog/get-all-post');
        // const response = await fetch('https://blogbackend.dmtims.edu.in/blog/get-all-post');
        const response = await fetch('https://dmtims.edu.in/nodeapi/blog/get-all-post');

        

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        console.log(posts)
       
      
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, []);





const modifyImageUrl = (imageUrls) => {
  // console.log("Type of imageUrl:", typeof imageUrls);
  // console.log("imageUrl:", imageUrls);

  // Check if imageUrl is a string
  if (typeof imageUrls!== 'string') {
    // console.error('Error: imageUrl is not a string');
    return ""; // Return an empty string or handle the error as needed
  }


  const show  = imageUrls.replace(/^public[\\\/]/,'').replace(/\\/g,'/');

  console.log('this is ',show);



  // const baseUrl = "http://localhost:8000";
  // const baseUrl = "https://blogbackend.dmtims.edu.in";
  const baseUrl = "https://dmtims.edu.in/nodeapi";
  const desiredUrl = `${baseUrl}/${show}`;
console.log("this is desired",desiredUrl);

  return desiredUrl;
  
};



  

  return (
    // <div className="container mx-auto my-8 px-16">
    //    {posts.title}
      
    //   <div   className="posts mt-16 flex flex-col gap-24">
    




    //     {/* data from backend */}
    //     {posts.map((post, index) => (
    //       <div key= {post._id} className={`post flex gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} >
    //         <div className="img relative ">
    //           <div className="absolute w-full h-full bg-lightGreen top-5 left-[-20px]"></div>
    //           {/* <img src={post.images} alt="id" className="w-full max-h-96 object-cover" /> */}
              
    //           {/* <img src={`http://localhost:8000/images/42-bobber.png`} alt="id" className="w-full max-h-96 object-cover" /> */}
    //           {/* or */}
    //           <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ?`${post.title} ${0}`: ''} className="w-full max-h-96 object-cover"/>
             
    //         </div>
    //         <div className="content flex-3">
    //             {/* <h1 className="font-bold text-3xl">{post.title} */}
    //             <div className='text-2xl font-bold'>{parse(post.title)}
    //             </div>
    //              {/* <h2 className="text-lg">{post.content[0]}</h2>  */}
    //             <div className='text-lg'>{parse(post.content[0])}</div>
    //           <Link href={`/post/${post._id}`}>
    //             <button className="bg-blue-500 text-white py-2 px-4 mt-4">Read More</button>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>






<div className="container mx-auto my-8 px-4 sm:px-8 lg:px-16">
  <h1 className="text-3xl font-bold mb-8">{posts.title}</h1>

  <div className="posts mt-16 flex flex-col gap-24">
    {/* data from backend */}
    {posts.map((post, index) => (
      <div key={post._id} className={`post ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8`}>
        <div className="img relative lg:w-1/4">
          <div className="absolute w-full h-full bg-lightGreen top-5 left-[-20px]"></div>
          {/* <img src={post.images} alt="id" className="w-full max-h-96 object-cover" /> */}
          {/* <img src={`http://localhost:8000/images/42-bobber.png`} alt="id" className="w-full max-h-96 object-cover" /> */}
          {/* or */}
          <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${0}` : ''} className="w-full max-h-72 object-cover" />
        </div>
        <div className="content lg:w-3/4">
          <div className='text-2xl font-bold'>{parse(post.title)}</div>
          <div className=''>{parse(post.content[0])}</div>
          <Link href={`/post/${post._id}`}>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4">Read More</button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  

  );
};

export default Home;
