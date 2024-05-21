// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DeleteBlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch all blogs from backend
//     axios.get('/api/blogs')
//       .then(response => {
//         setBlogs(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching blogs:', error);
//       });
//   }, []);

//   const handleDelete = () => {
//     // Delete the selected blog
//     axios.delete(`/api/blogs/${selectedBlog}`)
//       .then(response => {
//         setMessage(`Blog with ID ${selectedBlog} deleted successfully.`);
//         // Remove the deleted blog from the state
//         setBlogs(blogs.filter(blog => blog.id !== selectedBlog));
//       })
//       .catch(error => {
//         console.error('Error deleting blog:', error);
//         setMessage(`Error deleting blog with ID ${selectedBlog}.`);
//       });
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4">Delete Blog Post</h1>
//       <div className="mb-4">
//         <label htmlFor="blog" className="block text-sm font-medium text-gray-700">
//           Select a Blog to Delete:
//         </label>
//         <select
//           id="blog"
//           name="blog"
//           value={selectedBlog}
//           onChange={(e) => setSelectedBlog(e.target.value)}
//           className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//         >
//           <option value="">Select a blog</option>
//           {blogs.map(blog => (
//             <option key={blog.id} value={blog.id}>{blog.title}</option>
//           ))}
//         </select>
//       </div>
//       <button
//         onClick={handleDelete}
//         disabled={!selectedBlog}
//         className={`inline-block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ${!selectedBlog && 'cursor-not-allowed opacity-50'}`}
//       >
//         Delete Blog
//       </button>
//       {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
//     </div>
//   );
// };

// export default DeleteBlogPage;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DeleteBlogPage = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [images, setImages] = useState([]);
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch all blogs from the backend when the component mounts
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get('/api/blogs');
//       setBlogs(response.data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     }
//   };

//   const handleDelete = async (blogId) => {
//     try {
//       await axios.delete(`/api/blogs/${blogId}`);
//       // Update the state to remove the deleted blog
//       setBlogs(blogs.filter((blog) => blog._id !== blogId));
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   };

//   // Rest of your component code remains the same

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4">Create a New Blog</h1>
//       {/* Existing form to create a new blog */}
      
//       {/* Display existing blogs */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Existing Blogs</h2>
//         {blogs.map((blog) => (
//           <div key={blog._id} className="border p-4 mb-4">
//             <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//             <p className="text-gray-700 mb-2">{blog.content}</p>
//             <button
//               onClick={() => handleDelete(blog._id)}
//               className="inline-block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DeleteBlogPage;























// import React from 'react';

// const DeleteBlogPage = () => {
//   // Dummy data for demonstration
//   const dummyBlogs = [
//     {
//       id: 1,
//       title: "Ducks on the shore of a lake",
//       content: [
//         { type: "heading", text: "Warm-blooded vertebrate of the class Aves, having a body covered with feathers, forelimbs modified into wings, scaly legs, a beak, and no teeth, and bearing young in a hard-shelled egg" },
//         { type: "image", url: "https://images.pexels.com/photos/21567565/pexels-photo-21567565/free-photo-of-ducks-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Ducks on the shore of a lake describes a scene where ducks are located near the edge of a body of water, such as a lake. The phrase evokes imagery of serene natural surroundings, with ducks peacefully resting or moving about near the water's edge. It suggests a tranquil setting where wildlife coexists with nature, offering a picturesque and calming view of the lake and its inhabitants" },
//         { type: "image", url: "https://images.pexels.com/photos/21952805/pexels-photo-21952805/free-photo-of-morning-in-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "The phrase evokes imagery of serene natural surroundings, with ducks peacefully resting or moving about near the water's edge. It suggests a tranquil setting where wildlife coexists with nature, offering a picturesque and calming view of the lake and its inhabitants" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Blog 2",
//       content: [
//         { type: "heading", text: "blogging " },
//         { type: "text", text: "Text 3" },
//         { type: "image", url: "https://images.pexels.com/photos/17543464/pexels-photo-17543464/free-photo-of-a-magnifying-glass-lying-on-a-vintage-book-with-a-map.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "image", url: "https://images.pexels.com/photos/20830532/pexels-photo-20830532/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 4" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Blog 3",
//       content: [
//         { type: "heading", text: "Blog3" },
//         { type: "image", url: "https://images.pexels.com/photos/22711407/pexels-photo-22711407/free-photo-of-wooden-comb-and-toothbrush-in-a-bathroom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 1" },
//         { type: "image", url: "https://images.pexels.com/photos/23230316/pexels-photo-23230316/free-photo-of-a-person-walking-down-a-long-hallway-with-columns.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 2" }
//       ]
//     },
//     {
//       id: 4,
//       title: "Blog 4",
//       content: [
//         { type: "heading", text: "Blog4" },
//         { type: "text", text: "Text 1" },
//         { type: "text", text: "Text 2" },
//         { type: "image", url: "https://images.pexels.com/photos/22711496/pexels-photo-22711496/free-photo-of-appetizers-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "image", url: "https://images.pexels.com/photos/20359978/pexels-photo-20359978/free-photo-of-woman-in-black-coat-posing-by-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//       ]
//     },
//   ];

//   const handleDelete = (id) => {
//     // Add logic to delete the blog with the given id
//     console.log(`Deleting blog with ID: ${id}`);
    
//   };



  
    


//   return (
//     <div className="max-w-full max-h-full mx-auto mt-8  px-16 ">
//       <h1 className="text-3xl font-bold mb-4 ">Delete Blog</h1>
//       {dummyBlogs.map((blog) => (
        
//         <div key={blog.id} className="border p-4 w-full sm:px-16 md:px-24 mb-8 bg-blue-400 text-black">
//           <h2 className="text-3xl font-bold mb-2 ">{blog.title}</h2>
      
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 "
//             onClick={() => handleDelete(blog.id)}
//           >
//             Delete
//           </button>
//         </div>
//       ))}

//     </div>
//   );


 
// };

// export default DeleteBlogPage;






























// import React from 'react';

// const DeleteBlogPage = () => {
//   // Dummy data for demonstration
//   const dummyBlogs = [
//     {
//       id: 1,
//       title: "Ducks on the shore of a lake",
//       content: [
//         { type: "heading", text: "Warm-blooded vertebrate of the class Aves, having a body covered with feathers, forelimbs modified into wings, scaly legs, a beak, and no teeth, and bearing young in a hard-shelled egg" },
//         { type: "image", url: "https://images.pexels.com/photos/21567565/pexels-photo-21567565/free-photo-of-ducks-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Ducks on the shore of a lake describes a scene where ducks are located near the edge of a body of water, such as a lake. The phrase evokes imagery of serene natural surroundings, with ducks peacefully resting or moving about near the water's edge. It suggests a tranquil setting where wildlife coexists with nature, offering a picturesque and calming view of the lake and its inhabitants" },
//         { type: "image", url: "https://images.pexels.com/photos/21952805/pexels-photo-21952805/free-photo-of-morning-in-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "The phrase evokes imagery of serene natural surroundings, with ducks peacefully resting or moving about near the water's edge. It suggests a tranquil setting where wildlife coexists with nature, offering a picturesque and calming view of the lake and its inhabitants" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Blog 2",
//       content: [
//         { type: "heading", text: "blogging " },
//         { type: "text", text: "Text 3" },
//         { type: "image", url: "https://images.pexels.com/photos/17543464/pexels-photo-17543464/free-photo-of-a-magnifying-glass-lying-on-a-vintage-book-with-a-map.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "image", url: "https://images.pexels.com/photos/20830532/pexels-photo-20830532/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 4" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Blog 3",
//       content: [
//         { type: "heading", text: "Blog3" },
//         { type: "image", url: "https://images.pexels.com/photos/22711407/pexels-photo-22711407/free-photo-of-wooden-comb-and-toothbrush-in-a-bathroom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 1" },
//         { type: "image", url: "https://images.pexels.com/photos/23230316/pexels-photo-23230316/free-photo-of-a-person-walking-down-a-long-hallway-with-columns.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "text", text: "Text 2" }
//       ]
//     },
//     {
//       id: 4,
//       title: "Blog 4",
//       content: [
//         { type: "heading", text: "Blog4" },
//         { type: "text", text: "Text 1" },
//         { type: "text", text: "Text 2" },
//         { type: "image", url: "https://images.pexels.com/photos/22711496/pexels-photo-22711496/free-photo-of-appetizers-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//         { type: "image", url: "https://images.pexels.com/photos/20359978/pexels-photo-20359978/free-photo-of-woman-in-black-coat-posing-by-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//       ]
//     },
//   ];

//   const handleDelete = (id) => {
//     // Add logic to delete the blog with the given id
//     console.log(`Deleting blog with ID: ${id}`);
//   };

//   const renderContent = (content) => {
//     return content.map((section, index) => {
//       switch (section.type) {
//         case 'heading':
//           return <h2 key={index} className="text-xl font-medium mb-2">{section.text}</h2>;
//         case 'text':
//           return <p key={index} className="mb-2">{section.text}</p>;
//         case 'image':
//           return <img key={index} src={section.url} alt="Blog Image" className="mb-4 w-96 h-96" />;
//         default:
//           return null;
//       }
//     });
//   };

//   return (
//     <div className="max-w-full max-h-full mx-auto mt-8 ">
//       <h1 className="text-3xl font-bold mb-4 ">Delete Blog</h1>
//       {dummyBlogs.map((blog) => (
//         <div key={blog.id} className="border p-4 w-full sm:px-16 md:px-24 mb-8">
//           <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-medium mb-2">Content:</h3>
//             {renderContent(blog.content)}
//           </div>
//           <div className="flex justify-end">
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
//               onClick={() => handleDelete(blog.id)}
//             >
//               Delete
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               onClick={() => console.log(`Editing blog with ID: ${blog.id}`)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeleteBlogPage;




























import React, { useState, useContext,useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useRouter } from 'next/navigation';
import { UserContext } from '../../store/UserContext';

import parse from 'html-react-parser';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const DeleteBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

 const {userAuth:{access_token}} = useContext(UserContext)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/blog/get-all-post');
        const response = await axios.get('https://dmtims.edu.in/nodeapi/blog/get-all-post');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };
    fetchBlogs();
  }, []);



  const handleDelete = async (id) => {
    try {
      // const response = await axios.delete(`http://localhost:8000/blog/delete-post/${id}`,{
      const response = await axios.delete(`https://dmtims.edu.in/nodeapi/blog/delete-post/${id}`);
      console.log(response.data); // Log the response from the backend
      // Check if the deletion was successful
      if (response.status === 200) {
        // Remove the deleted blog from the state
        setBlogs(blogs.filter(blog => blog._id !== id));
        console.log('Blog deleted successfully.');
        toast.success(`Post deleted successfully `,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
    
          }
        )
      } else {
        console.error('Error deleting blog:', response.data.message);
        toast.error(`Failed to delete post `,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
    
          }
        )
      }
    } catch (error) {
      console.error('Error deleting blog:', error.message);
      toast.error(`Failed to delete post `,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
    
          }
        )
    }
  };

  if (!access_token) {
    // Only redirect on the client-side
    if (typeof window !== 'undefined') {
      router.push('404');
    }
  }


  const handleEdit = async (id) => {

    router.push(`/edit/${id}`);
    // try {
    //   // const response = await axios.get(`http://localhost:8000/blog/get-single/${id}`);
    //   const response = await axios.get(`http://localhost:8000/blog/get-single/${id}`);
    //   console.log(response.data); // Log the response from the backend
    //   // Check if the deletion was successful
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch post");
        
    //   }

    //   // const postData = await response.json();
    //   // console.log("this is post:", postData);

    //   // setPost(postData.data); // Accessing the `data` property of the response
    //   if(response.ok){
    //     router.push('edit')
    //   }
    // } catch (error) {
    //   console.error("Error fetching post:", error.message);
    // }
  };

  



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
    const baseUrl = "http://dmtims.edu.in/nodeapi";
    const desiredUrl = `${baseUrl}/${show}`;
  console.log("this is desired",desiredUrl);
  
    return desiredUrl;
    
  };

  console.log(blogs.content)
  return (
    <div className="max-w-full max-h-full mx-auto mt-8">
      <h1  className="text-3xl font-bold mb-4">Delete Blog</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 w-full sm:px-16 md:px-24 mb-8" >
          {/* <h2 className="text-3xl font-bold mb-2" >{blog.title}</h2> */}
          <div className="mb-2 font-bold text-2xl" >{parse(blog.title)}</div>
         
          <div className='lg:flex-wrap space-x-6 xl:w-60 flex-col px-2' >

          <img src={modifyImageUrl(blog.images[0])} alt={blog.images[0] ? `${blog.title} ${0}` : ''}  className="mb-4 mx-6 w-full  max-h-56 " />
          <img src={modifyImageUrl(blog.images[1])} alt={blog.images[1] ? `${blog.title} ${1}` : ''}  className="mb-4 mx-2  w-full max-h-56 " />
          <img src={modifyImageUrl(blog.images[2])} alt={blog.images[2] ? `${blog.title} ${2}` : ''} className="mb-4  w-full max-h-56 " />
          <img src={modifyImageUrl(blog.images[3])} alt={blog.images[3] ? `${blog.title} ${3}` : ''} className="mb-4  w-full max-h-56 " />
          {/* <img src={modifyImageUrl(blog.images[4])} alt={blog.images[4] ?`${blog.title} ${4}`: ''} className="mb-4  w-56 h-56 " /> */}
          <img src={modifyImageUrl(blog.images[3])} alt={blog.images[3] ? `${blog.title} ${4}`  : ''} className="w-full mb-4 max-h-56 " />

          </div>
          {/* <div className='font-medium text-base'  >
            {blog.content}
          </div> */}
          <div className=" ">{parse(blog.content[0])}
          </div>
          <div className="flex justify-end ">
            <button
              className="px-4 py-2 text-2xl bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
              onClick={() => handleDelete(blog._id)}
            >
            Delete
            

            </button>
           {/* <button className="px-4 py-2 text-2xl bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
            onClick={() => handleEdit(blog._id)}
            >
          Edit
           </button> */}
          </div>
        </div>
      ))}
    </div>

   
  );
};

export default DeleteBlogPage;
