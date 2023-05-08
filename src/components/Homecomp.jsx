 import React, { useState } from 'react'
// import { WebcamCapture} from '../components/Webcam'
//import MyComponent from './Captcha';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";


const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user",
    mirrored:'False'
};

 const Home = () => {
    const navigate=useNavigate()
     const [name, setName] = useState('')
     const [email, setEmail] = useState('');
     
     const handleSubmit2=(e)=>{

        e.preventDefault();
        const imageSrc=localStorage.getItem('image')
        const formData = new FormData();
        //formData.append('file_name', localStorage.getItem('image'));
         formData.append('Fname',localStorage.getItem('Fname'))
         formData.append('Lname',localStorage.getItem('Lname'))
         formData.append('email',localStorage.getItem('email'))
         formData.append('password',localStorage.getItem('password'))
        axios.post("http://127.0.0.1:5000/signup",formData,{headers: {
            'content-type': 'multipart/form-data'
        }}).then(res=>{console.log(res)}).catch(err=>{})
    navigate("/dashboard")
    }
//WEBCAM PART
const [id,setId]= useState(1)

const [image,setImage]=useState('');
const webcamRef = React.useRef(null);


const capture = React.useCallback(() => {
   const imageSrc = webcamRef.current.getScreenshot();
   setImage(imageSrc);
   setId(prevId => prevId + 1);
   console.log(id);
   localStorage.setItem(`image${id}`, imageSrc);
 });
 


//THE CAPTCHA PART
     const key="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  const [captchaIsDone,setCaptchaDone]=useState(false);
  function onChange()
  {
      console.log('changed')
      setCaptchaDone(true)
  }


     return (
         <div className="home-container mx-auto col-md-6">
             <div className="container">
                 <div className="text-white">
                     <h1 className='mb-3 text-lg'>Please take an image of your face</h1>
                     <form className="form">

                     <div className="webcam-container ">
             <div className="webcam-img flex justify-center">

                 {image == '' ? <Webcam
                     audio={false}
                     height={400}
                     ref={webcamRef}
                     screenshotFormat="image/jpeg"
                     width={420}
                     mirrored='true'
                     videoConstraints={videoConstraints}
                 /> : <img src={image} />}
             </div>
             <div>
                 {image != '' ?
                     <button onClick={(e) => {
                         e.preventDefault();
                         setImage('')
                     }}
                         className="webcam-btn btn m-3 text-white hover:bg-violet-800 bg-violet-600 border-violet-600">
                         Retake Image</button> :
                     <button onClick={(e) => {
                         e.preventDefault();
                         capture();
                     }}
                         className="webcam-btn btn m-3 text-white hover:bg-violet-800 bg-violet-600 border-violet-600">Capture</button>
                 }
             </div>
         </div>


                         {/* <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /> */}
                         <div className='flex justify-center mx-auto col-md-6'>
                         <ReCAPTCHA
                            sitekey={key}
                            onChange={onChange}
                        />
                        {/* {captchaIsDone && <button>Submit</button>} */}
                                                
                         </div>
                         {captchaIsDone &&<button type="submit" className='text-left mt-3 btn text-white hover:bg-violet-800 bg-violet-600 border-violet-600' id="login-button" onClick={handleSubmit2}>Submit</button>}
                     </form>
                 </div>
             </div>
         </div>
     )
 }
 export default Home