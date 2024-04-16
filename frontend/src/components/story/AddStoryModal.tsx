import { useRef, useState } from "react";
import { useFormik } from "formik";
import { toast } from "sonner";
import CropImage from "../CropImg";
import { Spinner } from "flowbite-react";
import { ImagePlus } from "lucide-react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { addStory } from "../../services/api/user/apiMethods";
import axios from "axios";

function AddStoryModal({ setAddStoryModal }) {
  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCroppeSelected, setIsCroppeSelected] = useState(false);

  const [croppedImage, setCroppedImage] = useState("");

  const formik = useFormik({
    initialValues: {
      images: "",
    },
    validationSchema: Yup.object({
      //   title: Yup.string().required("Title is required"),
    }),
    onSubmit: async () => {
      setIsLoading(true);
      console.log("hello", userId);
      console.log(croppedImage);
      let imageUrls = "";
      const response = await fetch(croppedImage);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "bnaqltis");

      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dgkfbywof/image/upload",
          formData
        );
        console.log(res.data.secure_url);

        const imageUrl = res.data.secure_url;
        imageUrls = imageUrl;
      } catch (error) {
        console.log("Error uploading image:", error);
      }

      addStory({
        userId,
        imageUrls,
      })
        .then((response: any) => {
          const data = response.data;
          if (response.status === 200) {
            toast.info(data.message);
            // setNewPost(response.data.posts);
            setIsLoading(false);
            resetState();
            handleCancelClick();
          } else {
            console.log(response.message);
            toast.error(data.message);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
          console.log(error?.message);
        });
    },
  });

  const handleCancelClick = () => {
    formik.values.images = "";
    setCroppedImage('');
    console.log(croppedImage);
    resetState();
    setAddStoryModal(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.setAttribute("accept", "image/*");
    fileInputRef.current?.click();
  };
  const resetState = () => {
    setCroppedImage("");

    formik.values.images = "";
  };

  const handleCloseCanvas = () => {
    setIsCroppeSelected(!isCroppeSelected);
  };

  return (
    <div className="addpost-popup z-50">
      <div className="addpost-popup">
        <div className="addpost-modal rounded-xl flex bg-gray-100 mx-auto w-full flex-col text-gray-800 border z-50 border-gray-300 p-5 shadow-lg h-3/4 max-w-md">
          <p className="font-semibold text-3xl text-center m-3">Create Story</p>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className="flex ">
              <div className=" w-full">
                <div
                  onClick={handleButtonClick}
                  className="image-preview flex items-center bg-white shadow-lg justify-center h-96 cursor-pointer"
                >
                  {!formik.values.images.length && (
                    <div className="flex flex-col gap 10 items-center">
                      {(!formik.values.images || formik.errors.images) && (
                        <div className="flex flex-col gap 10 items-center">
                          <ImagePlus color="gray" strokeWidth={1.5} size={40} />
                          <p className="text-blue-700 mt-2">
                            Select Image
                          </p>{" "}
                        </div>
                      )}
                    </div>
                  )}

                  {croppedImage && !formik.errors.images && (
                    <div className="flex mt-5 gap-4">
                      <div>
                        {
                          <img
                            style={{ borderRadius: "10px" }}
                            src={croppedImage}
                            alt={`Preview `}
                          />
                        }
                      </div>
                    </div>
                  )}
                </div>
                {formik.values.images &&
                  isCroppeSelected &&
                  !formik.errors.images && (
                    <CropImage
                      imgUrl={formik.values.images}
                      aspectInit={{ value: 1 / 1 }}
                      setCroppedImg={setCroppedImage}
                      handleNextImage={handleCloseCanvas}
                    />
                  )}

                {formik.errors.images && (
                  <p className="text-red-600 text-xs">{formik.errors.images}</p>
                )}
              </div>
            </div>
            <div className="icons flex text-gray-500 m-2">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    const file = files[0];
                    if (!file.type.startsWith("image/")) {
                      toast.error("Please select an image file.");
                      return;
                    }
                    const imageUrl = URL.createObjectURL(file);
                    setIsCroppeSelected(!isCroppeSelected);

                    formik.setFieldValue("images", imageUrl);
                  }
                }}
              />

             
            </div>
            <div className="buttons flex ">
              <div
                onClick={handleCancelClick}
                className="text-xs  btn border border-gray-300 px-6 py-3 rounded-lg cursor-pointer text-gray-500 ml-auto hover:bg-red-600  hover:text-white "
              >
                Cancel
              </div>
              <button
                type="submit"
                className="text-xs rounded-lg btn border px-6 py-3 cursor-pointer text-white ml-2 bg-gradient-to-b from-purple-600 to-blue-400  hover:bg-green-600"
              >
                {isLoading && (
                  <Spinner aria-label="Extra small spinner example" size="sm" />
                )}
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStoryModal;