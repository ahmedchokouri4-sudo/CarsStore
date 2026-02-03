import React from 'react'
import { useState } from 'react';
const Announce = () => {

    const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // 1. Ched l-fichié m l-input
    if (file) {
      const reader = new FileReader(); // 2. Gad l-motarjim (Reader)
      
      reader.onloadend = () => {
        // 3. Hna l-fichié rje3 String (Base64)
        const base64String = reader.result; 
        
        // 4. Updati l-state dial VehicleData nichan
        SetVehicleData({
          ...VehicleData,
          image: base64String 
        });
      };

      reader.readAsDataURL(file); // 5. Bdaw l-khidma dial conversion
    }
  };

 const [VehicleData,SetVehicleData] = useState({
    mark: '',
    model: '',
    version: '',
    vmilage: '',
    vyear: '',
    desiredValue: '',
    pname: '',
    email: '',
    numero: '',
    image: '',
    agreed: false,
  })

  function HandleChange(e){
    const { name, value, type, checked } = e.target;
   SetVehicleData({
  ...VehicleData,                    
  [name]: type === 'checkbox' ? checked : value 
});
    
  }


  function HandleSubmit (e){
    e.preventDefault();
    console.log(VehicleData);
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
     const updatedData = [...existingData, VehicleData];
      localStorage.setItem('formData', JSON.stringify(updatedData));
  }

  return (
    <div className='flex flex-col  px-6 lg:px-28  space-y-14 py-12 lg:py-20 lg:pb-60 '>
      <div className='space-y-2'>
        <h1 className='font-bold text-2xl'>Advertise your vehicle</h1>
        <p className='text-xs'>Fill out the form and place your ad! Our team will contact you as soon as possible.</p>
      </div>
      <form  onSubmit={HandleSubmit}>
        <div>
            <h3 className='pb-3 font-bold'>Vehicle data</h3>
            <div className='grid grid-cols-2  lg:grid-cols-3 gap-6  '>
                
                <input  value={VehicleData.mark} onChange={HandleChange} name='mark' type="text" placeholder='Mark' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'  />
                <input value={VehicleData.model} onChange={HandleChange} name='model' type="text" placeholder='Model ' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96' />
                <input value={VehicleData.version} onChange={HandleChange} name='version' type="text" placeholder='Version' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96' />
                <input value={VehicleData.vmilage} onChange={HandleChange} name='vmilage' type="text" placeholder='Vehicle mileage' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'/>
                <input value={VehicleData.vyear} onChange={HandleChange} name='vyear' type="text" placeholder='Vehicle year' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'/>
                <input value={VehicleData.desiredValue} onChange={HandleChange} name='desiredValue' type="text" placeholder='Desired value' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'/>
            </div>
            <div/>
        <div>
            
            <div className='space-y-2'>
                <h3 className='pt-3 font-bold'>Personal data</h3>
            <div className='grid grid-cols-2  lg:grid-cols-3 gap-6 '>
                
                <input value={VehicleData.pname} onChange={HandleChange} name='pname' type="text" placeholder='Name'  className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'/>
                <input value={VehicleData.email} onChange={HandleChange} name='email' type="Email" placeholder='E-mail'  className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96'/>
                <input value={VehicleData.numero} onChange={HandleChange}  name='numero' type="number" placeholder='Número' className='border-1 border-black/50 rounded-lg py-2 pl-3 lg:max-w-96' />
                
                
            </div>
            </div>
        </div>
        <div className='flex flex-col space-y-4  '>
            <h3 className='pt-4 font-bold '>Photos of the vehicle</h3>
            <div className='flex gap-3 items-center' >
           <label 
        htmlFor="file-upload" 
        className="cursor-pointer bg-black text-white border-2 border-black max-w-48 px-4 py-2 text-center rounded-md hover:bg-white hover:text-black hover:border-2 transition-all duration-300  overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {fileName === "No file chosen" ? "Select Image..." : fileName}
            </label>
            <input id="file-upload" type="file" accept="image" onChange={handleFileChange}   className= 'hidden bg-black text-white border-2 border-black/30 max-w-36 '/>
            <img src={VehicleData.image}  className="w-12 h-12 rounded object-cover border" />
            <p className='text-xs '>No file selected.</p>
            </div>
        </div>
        <div className='grid grid-cols-1  space-y-6 '>
            <input type="submit" value="Send"  className='mt-10 border-1 bg-black text-white  border-black max-w-48 px-4 py-2 text-center rounded-lg hover:bg-white hover:text-black hover:border-2 transition-all duration-300 cursor-pointer  max-w-dvh'/>
            <div className='flex gap-2  items-start'>
            <input type="checkbox" checked={VehicleData.agreed} onChange={HandleChange} name='agreed' className='mt-1' />
            <p className='text-xs'>In accordance with the LGPD (Brazilian General Data Protection Law), I agree to provide the above data so that Torres Cars can contact me to present services. Your name, email, and phone number will be used in accordance with our Privacy Policy.</p>
            </div>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Announce
