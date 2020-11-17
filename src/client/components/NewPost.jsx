import React from 'react';

const NewPost = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-12 sm:pb-32">
        <main className="text-center mt-8 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="flex-col justify-center items-center">
            <div className="">
              <label
                htmlFor="imageFile"
                className="text-3xl cursor-pointer font-extrabold leading-10 tracking-tight text-center text-green-600 sm:mt-5 sm:leading-none sm:text-5xl lg:mt-6 lg:text-6xl xl:text-8xl"
              >
                Click here to upload Image
              </label>
              <input
                className="mt-3 px-8 text-center text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                type="file"
                id="imageFile"
                capture="user"
                accept="image/*"
              ></input>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewPost;
