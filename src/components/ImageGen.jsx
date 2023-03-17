import React, {useState} from 'react'
import openai from '../vendor/Openai';

const ImageGen = () => {
      const [image, setImage] = useState("http://via.placeholder.com/640x360");
      const [imageInput, setImageInput] = useState("");
      const [loading, setLoading] = useState(false);

      const fetchImage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await openai.createImage({
            prompt: imageInput,
            n: 1,
            size: "1024x1024",
          });
          setImage(response.data.data[0].url);
          setImageInput("");
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }

      return (
        <div>
          <div className="container-one">
          {/* <div className="my-4"> */}
            {/* <div className="col-md-6"> */}
              {/* <div className="card"> */}
                <div className="text-center">
                  {/* <div> */}
                    Generate Image
                  {/* </div> */}
                </div>
                {/* <div className="card-body"> */}
                  <div className='my-3'>
                      {
                        // loading ?
                        //   <div
                        //   className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        //   role="status">
                        //   <span
                        //     className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        //     >Loading...
                        //   </span>
                        // </div>
                        // : 
                        <img src={image} alt="image"/>
                      }
                  </div>
                  <form onSubmit={(e) => fetchImage(e)}>
                    <div className="mb-3">
                      <input type="text" 
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)}
                         placeholder='Search...'/>
                    </div>
                    <div className="mb-3">
                      {
                        loading ?
                        <div
                          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          role="status">
                          <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...
                          </span>
                        </div>
                        : 
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                          Submit
                        </button>
                      }
                    </div>
                  </form>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      //  </div>
      )
}

export default ImageGen