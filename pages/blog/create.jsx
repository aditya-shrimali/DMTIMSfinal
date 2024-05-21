
/**trying to add sanitizehtml because react quill storing data with html tags**/
import React, { useContext, useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import sanitizeHtml from 'sanitize-html';
import {useRouter} from 'next/navigation';
import { UserContext } from '../../store/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });



const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline',],
    // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    // ['clean']
  ],
};
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image'
];


const CreatePost = () => {

 const router = useRouter();

 
 //using context api for verify that session has token or not then only admin can see this page
 const {userAuth:{access_token}} = useContext(UserContext)






  
  const [title, setTitle] = useState('');
  const [images, setDisplayImage] = useState('');
  const [images1, setDisplayImage1] = useState('');
  const [images2, setDisplayImage2] = useState('');
  const [images3, setDisplayImage3] = useState('');
  const [images4, setDisplayImage4] = useState('');
  const [content, setContents] = useState('');
  const [content1, setContents1] = useState('');
  const [content2, setContents2] = useState('');
  const [content3, setContents3] = useState('');
  const [content4, setContents4] = useState('');
  const [content5, setContents5] = useState('');
  
  
  const handleTitleChange = (value) => {
    setTitle(value);
  };

  // Function to handle display image change
  const handleDisplayImageChange = (e) => {
    setDisplayImage(e.target.files[0]);
    console.log(e.target.files[0]);
    
  };

  const handleDisplayImageChange1 = (e) => {
    setDisplayImage1( e.target.files[0]);
    console.log(e.target.files[0]);
    
};
  const handleDisplayImageChange2 = (e) => {
    setDisplayImage2( e.target.files[0]);
    console.log("this is 3",e.target.files[0]);
    
};
  const handleDisplayImageChange3 = (e) => {
    setDisplayImage3( e.target.files[0]);
    console.log(e.target.files[0]);
    
};
  const handleDisplayImageChange4 = (e) => {
    setDisplayImage4( e.target.files[0]);
    console.log(e.target.files[0]);
    
};
 


  const handleContentChange0 = (value) => {
    
    setContents(value);
  };

  const handleContentChange1 = (value) => {
    
    
    setContents1(value)
  };
  const handleContentChange2 = (value) => {
    
    setContents2(value)
  };
  const handleContentChange3 = (value) => {
    
    setContents3(value)
  };
  const handleContentChange4 = (value) => {
    
    setContents4(value)
  };
  const handleContentChange5 = (value) => {
    
    setContents5(value)
  };

  

  const sanitizeOptions = {
    // allowedTags: ['h1', 'b', 'strong', 'i', 'em', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'],
    // allowedTags: [],
    // allowedAttributes: {},
  };

  



  

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    // Create FormData object to send multipart/form-data
    const formData = new FormData();

    // const sanitizer = sanitizeHtml(title, sanitizeOptions);
    // formData.append('title', sanitizer);
    formData.append('title', title);

    // Append title and display image to formData
    formData.append('images', images);
    formData.append(`images`, images1);
    formData.append(`images`, images2);
    formData.append(`images`, images3);
    formData.append(`images`, images4);

   

//   const sanitizedContent1 = sanitizeHtml(content1, sanitizeOptions);
// formData.append('content', sanitizedContent1);
//   const sanitizedContent2 = sanitizeHtml(content2, sanitizeOptions);
// formData.append('content', sanitizedContent2);
//   const sanitizedContent3 = sanitizeHtml(content3, sanitizeOptions);
// formData.append('content', sanitizedContent3);
//   const sanitizedContent4 = sanitizeHtml(content4, sanitizeOptions);
// formData.append('content', sanitizedContent4);
//   const sanitizedContent5 = sanitizeHtml(content5, sanitizeOptions);
// formData.append('content', sanitizedContent5);


      formData.append(`content`,content);
      formData.append(`content`,content1);
      formData.append(`content`,content2);
      formData.append(`content`,content3);
      formData.append(`content`,content4);
      formData.append(`content`,content5);


    try {
      // Send POST request to server with formData
      // const response = await axios.post('http://localhost:8000/blog/create-post', formData,
      // const response = await axios.post('https://blogbackend.dmtims.edu.in/blog/create-post', formData,
      const response = await axios.post('https://dmtims.edu.in/nodeapi/blog/create-post', formData,
      {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    toast.success("Post created Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      

      });     
      console.log('Post created successfully:', response.data);
      router.push('home')
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error("Failed to create post", {
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
  };



// check if token is stored in session and when match then only can work on this page other wise redirect to page not found
  if (!access_token) {
    // Only redirect on the client-side
    if (typeof window !== 'undefined') {
      router.push('404');
    }
  }
  return (
    <>
    <div className="mx-auto p-8 max-w-[768px]">
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <ReactQuill
            type="text"
            id="title"
            name="title"
            value={title}
            modules={modules}
            formats={formats}
            onChange={handleTitleChange}
            // className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter the title of your post"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Description
            </label>
           


<ReactQuill
  theme="snow"
  value={content}
  modules={modules}
            formats={formats}
  onChange={handleContentChange0}
/>

        <div className="mb-4">
          <label htmlFor="displayImage" className="block text-sm font-medium text-gray-700">
            Display Image
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleDisplayImageChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Content 1
            </label>
          
<ReactQuill
  theme="snow"
  value={content1}
  onChange={handleContentChange1}
   modules={modules}
            formats={formats}
/>
        <div className="mb-4">
          <label htmlFor="displayImage" className="block text-sm font-medium text-gray-700">
            Image 1
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleDisplayImageChange1}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Content 2
            </label>
           
<ReactQuill
  theme="snow"
  value={content2}
  modules={modules}
            formats={formats}
  onChange={handleContentChange2}
/>
        <div className="mb-4">
          <label htmlFor="displayImage" className="block text-sm font-medium text-gray-700">
            Image 2
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleDisplayImageChange2}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Content 3
            </label>
          
            <ReactQuill
  theme="snow"
  value={content3}
  modules={modules}
            formats={formats}
  onChange={handleContentChange3}
/>
        <div className="mb-4">
          <label htmlFor="displayImage" className="block text-sm font-medium text-gray-700">
            Image 3
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleDisplayImageChange3}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Content 4
            </label>
           
            <ReactQuill
  theme="snow"
  value={content4}
  modules={modules}
            formats={formats}
  onChange={handleContentChange4}
/>
        <div className="mb-4">
          <label htmlFor="displayImage" className="block text-sm font-medium text-gray-700">
            Image 4
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleDisplayImageChange4}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
              Content 5
            </label>
          
            <ReactQuill
  theme="snow"
  value={content5}
  modules={modules}
            formats={formats}
  onChange={handleContentChange5}
/>


       
        <div>
          <button
            type="submit"
            className="inline-block px-4 p-4 my-4  bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>

</>
  );
};

export default CreatePost;
