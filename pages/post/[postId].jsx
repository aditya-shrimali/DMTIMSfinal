
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'

// const Home = () => {
//     const [posts, setPosts] = useState([]);
//     const params = useParams()
// //   console.log('params',params)

// //   let posts = null;
//  useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/blog/get-single/${params.postId}`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//        const posts = await response.json();
//         console.log("this is posts:",posts);

//         setPosts(posts);
//       } catch (error) {
//         console.error("Error fetching posts:", error.message);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
// <div>
// "hello"
// {posts.data.title}
// </div>

//     // <div className="container mx-auto my-8 px-16">
//     //   {posts.title}

//     //   <div className="posts mt-16 flex flex-col gap-24">
//     //     {/* data from backend */}
//     //     {posts.map((post, index) => (
//     //       <div
//     //         key={post._id}
//     //         className={`post flex gap-8 ${
//     //           index % 2 === 0 ? "flex-row-reverse" : ""
//     //         }`}
//     //       >
//     //         <div className="img flex-2 relative">
//     //           <div className="bg-lightGreen absolute left-[-20px] top-5 h-full w-full"></div>
//     //           {/* <img src={post.images} alt="id" className="w-full max-h-96 object-cover" /> */}
//     //           {/* <img src={`${post.images}`} alt="id" className="w-full max-h-96 object-cover" /> */}
//     //           <img
//     //             src={`http://localhost:8000/images/42-bobber.png`}
//     //             alt="id"
//     //             className="max-h-96 w-full object-cover"
//     //           />
//     //         </div>
//     //         <div className="content flex-3">
//     //           <h1 className="text-3xl font-bold">{post.title}</h1>
//     //           <h2 className="text-lg">{post.content}</h2>
//     //           <Link href={`posts/${post._id}`}>
//     //             <button className="mt-4 bg-blue-500 px-4 py-2 text-white">
//     //               Read More
//     //             </button>
//     //           </Link>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>

//   );

// }

// export default Home














"use client";
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import parse, { domToReact } from 'html-react-parser';


const Home = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // const response = await fetch(`http://localhost:8000/blog/get-single/${postId}`);
        const response = await fetch(`https://dmtims.edu.in/nodeapi/blog/get-single/${postId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        const postData = await response.json();
        console.log("Data is successfully rendering:", postData);

        setPost(postData.data); // Accessing the `data` property of the response
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);



  const modifyImageUrl = (imageUrls) => {
    // console.log("Type of imageUrl:", typeof imageUrls);
    // console.log("imageUrl:", imageUrls);

    // Check if imageUrl is a string
    if (typeof imageUrls !== 'string') {
      // console.error('Error: imageUrl is not a string');
      return ""; // Return an empty string or handle the error as needed
    }


    const show  = imageUrls.replace(/^public[\\\/]/,'').replace(/\\/g,'/');
    console.log('this is ', show);



    // const baseUrl = "http://localhost:8000";
    const baseUrl = "https://dmtims.edu.in/nodeapi";
    const desiredUrl = `${baseUrl}/${show}`;
    console.log("this is desired", desiredUrl);

    return desiredUrl;

  };




  const customOptions = {
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        if (domNode.name === 'ul') {
          return <CustomUl>{domToReact(domNode.children, customOptions)}</CustomUl>;
        }
        if (domNode.name === 'ol') {
          return <CustomOl>{domToReact(domNode.children, customOptions)}</CustomOl>;
        }
        if (domNode.name === 'li') {
          return <CustomLi>{domToReact(domNode.children, customOptions)}</CustomLi>;
        }
      }
    },
  };



  function CustomUl({ children }) {
    return <ul>{children}</ul>;
  }
  
  function CustomOl({ children }) {
    return <ol>{children}</ol>;
  }
  
  function CustomLi({ children }) {
    return <li>{children}</li>;
  }

  return (
    // <div>
    //   {post ? (
    //     <div>
    //       {/* <div className="max-w-full max-h-full mx-auto mt-8">
    //   <h1 className="text-3xl font-bold mb-4 px-16">{post.title}</h1>
    //   <div className="border p-4 w-full sm:px-16 md:px-24 mb-8">
    //    {post.content}
    //                <img src ={post.images} alt="" className="w-full max-h-96 object-cover" /> 
    //               </div> */}

    //       <div className="max-w-[768px]  max-h-full mx-auto mt-8 border py-8 p-8 ">
    //         {/* <h1 className="text-4xl font-bold mb-4">{post.title}</h1> */}
    //         <h1 className=" mb-4">{parse(post.title)}</h1>
    //         {/* <div className="    mb-8 text-2xl">
    //           {post.content[0]}
    //         </div> */}
    //         <div className="mb-8">
    //           {parse(post.content[0])}
    //         </div>
    //         {/* <div className='mb-8 text-xl'>
    //           <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //           {post.content[1]}
    //           <img src={modifyImageUrl(post.images[1])} alt={post.images[1] ? `${post.title} ${2}`: ''} className="w-full my-8 max-h-96 " />
    //           {post.content[2]}
    //           <img src={modifyImageUrl(post.images[2])} alt={post.images[2] ? `${post.title} ${3}`: ''} className="w-full my-8  max-h-96 " />
    //           {post.content[3]}
    //           <img src={modifyImageUrl(post.images[3])} alt={post.images[3] ?`${post.title} ${4}`: ''}className="w-full my-8  max-h-96 " />
    //           {post.content[4]}
    //           <img src={modifyImageUrl(post.images[4])} alt={post.images[3] ?`${post.title} ${5}`: ''}className="w-full my-8  max-h-96 " />
    //           {post.content[5]}
    //           </div> */}
    //         <div className='mb-8'>
    //           <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //           {parse(post.content[1])}
    //           <img src={modifyImageUrl(post.images[1])} alt={post.images[1] ? `${post.title} ${2}`: ''} className="w-full my-8 max-h-96 " />
    //           {parse(post.content[2])}
    //           <img src={modifyImageUrl(post.images[2])} alt={post.images[2] ? `${post.title} ${3}`: ''} className="w-full my-8  max-h-96 " />
    //           {parse(post.content[3])}
    //           <img src={modifyImageUrl(post.images[3])} alt={post.images[3] ?`${post.title} ${4}`: ''}className="w-full my-8  max-h-96 " />
    //           {parse(post.content[4])}
    //           <img src={modifyImageUrl(post.images[4])} alt={post.images[3] ?`${post.title} ${5}`: ''}className="w-full my-8  max-h-96 " />
    //           {parse(post.content[5])}
    //           </div>


    //       </div>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>











    //     <div>
    //     {/* <div className="max-w-full max-h-full mx-auto mt-8">
    // <h1 className="text-3xl font-bold mb-4 px-16">{post.title}</h1>
    // <div className="border p-4 w-full sm:px-16 md:px-24 mb-8">
    //  {post.content}
    //              <img src ={post.images} alt="" className="w-full max-h-96 object-cover" /> 
    //             </div> */}

    //     <div className="max-w-[768px]  max-h-full mx-auto mt-8 border py-8 p-8 ">
    //       {/* <h1 className="text-4xl font-bold mb-4">{post.title}</h1> */}
    //       <h1 className=" mb-4 text-2xl font-bold">

    //       {/* {parse(post.title) && (
    //       <>{parse(post.title)}</>
    //     )} */}
    //         {/* {post.title} */}

    //         {post && parse(post.title)}
    //         </h1>
    //       {/* <div className="    mb-8 text-2xl">
    //         {post.content[0]}
    //       </div> */}
    //       <div className="mb-8">
    //       {post && (
    //       <>{parse(post.content[0])}</>
    //     )}

    //       </div>

    //       <div className='mb-8'>

    //         {post && 
    //         (
    //           // <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " /> 
    //           <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //         )
    //         }
    //         {/* {post && (
    //       <div className='text-lg'>{parse(post.content[1])}</div>
    //     )}
    //       */}


    // {post && post.content[1] && typeof post.content[1] === 'string' && (
    //   <div className='text-lg'>{parse(post.content[1])}</div>
    // )}

    //      {post && 
    //         (
    //           // <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //           <img src={modifyImageUrl(post.images[1])} alt={post.images[1] ? `${post.title} ${2}`: ''} className="w-full my-8 max-h-96 " />
    //         )
    //         }
    //         {/* {post && (
    //       <div className='text-lg'>{parse(post.content[2])}</div>
    //     )} */}
    //     {post && post.content[2] && typeof post.content[2] === 'string' && (
    //   <div className='text-lg'>{parse(post.content[2])}</div>
    // )}


    // {post && 
    //         (
    //           // <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //           <img src={modifyImageUrl(post.images[2])} alt={post.images[2] ? `${post.title} ${3}`: ''} className="w-full my-8  max-h-96 " />
    //         )
    //         }
    //         {/* {post && (
    //       <div className='text-lg'>{parse(post.content[3])}</div>
    //     )} */}

    // {post && post.content[3] && typeof post.content[3] === 'string' && (
    //   <div className='text-lg'>{parse(post.content[3])}</div>
    // )}

    // {post && 
    //         (
    //           // <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}`  : ''} className="w-full my-8 max-h-96 " />
    //           <img src={modifyImageUrl(post.images[3])} alt={post.images[3] ?`${post.title} ${4}`: ''}className="w-full my-8  max-h-96 " />
    //         )
    //         }
    //         {/* {post && (
    //       <div className='text-lg'>{parse(post.content[4])}</div>
    //     )} */}

    // {post && post.content[4] && typeof post.content[4] === 'string' && (
    //   <div className='text-lg'>{parse(post.content[4])}</div>
    // )}

    //         {/* <img src={modifyImageUrl(post.images[4])} alt={post.images[3] ?`${post.title} ${5}`: ''}className="w-full my-8  max-h-96 " /> */}

    //         {post && (
    //       <>              <img src={modifyImageUrl(post.images[4])} alt={post.images[3] ?`${post.title} ${5}`: ''}className="w-full my-8  max-h-96 " />
    //       </>
    //     )}


    //         {/* {post && (
    //       <div className='text-lg'>{parse(post.content[5])}</div>
    //     )} */}
    //         </div>


    //     </div>
    //   </div>




    ///**this is final code */
    <div>
      <div>

        <div className="max-w-[768px]  max-h-full mx-auto mt-8 border py-8 p-8 ">
          

          

          <div className='py-8'>

            {post &&
              (
                <img src={modifyImageUrl(post.images[0])} alt={post.images[0] ? `${post.title} ${1}` : ''} className="w-full my-1  max-h-96 " />
              )
            }

                <div className=" my-4 text-2xl font-bold">



                {post && parse(post.title)}
                </div>




                <div className="my-2">
            {post && (
              <>{parse(post.content[0], customOptions)}</>
            )}

          </div>

            {post && post.content[1] && typeof post.content[1] === 'string' && (
              <div className=''>{parse(post.content[1], customOptions)}</div>
            )}

            {post &&
              (
                <img src={modifyImageUrl(post.images[1])} alt={post.images[1] ? `${post.title} ${2}` : ''} className="w-full my-1 max-h-96 " />
              )
            }

            {post && post.content[2] && typeof post.content[2] === 'string' && (
              <div className=''>{parse(post.content[2], customOptions)}</div>
            )}


            {post &&
              (
                <img src={modifyImageUrl(post.images[2])} alt={post.images[2] ? `${post.title} ${3}` : ''} className="w-full my-1  max-h-96 " />
              )
            }


            {post && post.content[3] && typeof post.content[3] === 'string' && (
              <div className=''>
              •{parse(post.content[3], customOptions)}</div>
            )}

            {post &&
              (
                <img src={modifyImageUrl(post.images[3])} alt={post.images[3] ? `${post.title} ${4}` : ''} className="w-full my-1  max-h-96 " />
              )
            }


            {post && post.content[4] && typeof post.content[4] === 'string' && (
              <div className=''>{parse(post.content[4], customOptions)}</div>
            )}


            {post && (
              <>              <img src={modifyImageUrl(post.images[4])} alt={post.images[3] ? `${post.title} ${5}` : ''} className="w-full  my-1  max-h-96 " />
              </>
            )}



          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
