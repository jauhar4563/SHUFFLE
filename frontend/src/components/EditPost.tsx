import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import { editPost } from "../services/api/user/apiMethods";

function EditPost({ post ,onCancelEdit }) {
    const [hideLikes, setHideLikes] = useState(false);
    const [hideComment, setHideComment] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: post.title,
      description: post.description,
      
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values) => {
        const postId = post._id;
      const { title, description } = values;
      try {
        await editPost({
          postId,
          title,
          description,
          hideComment,
          hideLikes

        });
        toast.success("Post updated successfully");
        onCancelEdit();
      } catch (error) {
        console.error("Error updating post:", error);
        toast.error("Failed to update post");
      }
    },
  });

  return (
    <div className="addpost-popup z-50">
      <div className="addpost-popup">
        <div className="addpost-modal rounded-xl flex bg-gray-100 mx-auto w-10/12 flex-col text-gray-800 border z-50 border-gray-300 p-5 shadow-lg max-w-2xl">
          <p className="font-semibold text-5xl m-3">Edit Post</p>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className="flex ">
              <div className=" flex items-center bg-white shadow-lg justify-center h-64 cursor-pointer">
                {/* Image Preview */}
                <img  style={{  height:'250px',borderRadius:'10px'}} src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-col w-6/12">
                <p className="font-semibold">Title</p>
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-lg shadow-lg p-2 py-3 mb-3 outline-none text-xs font-normal"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="title"
                />
                {formik.touched.title && formik.errors.title && (
                  <p className="text-red-600 text-xs">
                    {formik.errors.title}
                  </p>
                )}
                <p className="font-semibold mb-2">Description</p>
                <textarea
                  className="rounded-lg description sec p-3 h-40 shadow-lg border-gray-300 outline-none text-xs font-normal"
                  spellCheck="false"
                  placeholder="Describe everything about this post here"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="description"
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-600 text-xs">
                    {formik.errors.description}
                  </p>
                )}
              </div>
            </div>
            {/* Buttons */}
            <div className="buttons flex">
              <div
                onClick={onCancelEdit}
                className="text-xs btn border border-gray-300 px-6 py-3 rounded-lg cursor-pointer text-gray-500 ml-auto hover:bg-red-600 hover:text-white"
              >
                Cancel
              </div>
              <button
                type="submit"
                className="text-xs rounded-lg btn border px-6 py-3 cursor-pointer text-white ml-2 bg-gradient-to-b from-purple-600 to-blue-400 hover:bg-green-600"
              >
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
