import React from 'react'
import { useState } from 'react'
const FormSection = () => {
  const [formData,SetFormData] = useState({
    model: '',
    name: '',
    email: '',
    number: '',
    agreed: false,
  })

  function HandleChange(e){
    const { name, value, type, checked } = e.target;
   SetFormData({
  ...formData,                    
  [name]: type === 'checkbox' ? checked : value 
});
    
  }


  function HandleSubmit (e){
    e.preventDefault();
    console.log(formData);
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
     const updatedData = [...existingData, formData];
      localStorage.setItem('formData', JSON.stringify(updatedData));
  }


  return (
<div className='flex justify-center px-4 md:px-0 py-10 mb-20'>
  <div className='flex flex-col space-y-8 w-full max-w-6xl'>
    {/* Header */}
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold'>Are you looking for a specific model?</h1>
      <p>Leave your contact information so our team can get in touch with you!</p>
    </div>

    {/* Form */}
    <div className='border border-black/50 rounded-2xl py-10 md:py-20 md:px-6 flex justify-center items-center'>
      <form className="flex flex-col gap-6 w-full px-4 md:px-0" onSubmit={HandleSubmit}>
        <div className='flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0'>
          <input value={formData.model} onChange={HandleChange} type="text" name='model' placeholder='Model' required className='border border-black/50 rounded-lg text-center py-2 flex-1' />
          <input value={formData.name}  onChange={HandleChange} type="text" name='name' placeholder='Name' className='border border-black/50 rounded-lg text-center py-2 flex-1' />
          <input value={formData.email} onChange={HandleChange} type="text" name='email' placeholder='E-mail' className='border border-black/50 rounded-lg text-center py-2 flex-1' />
          <input value={formData.number} onChange={HandleChange} type="number"  name='number' placeholder='Number' className='border border-black/50 rounded-lg text-center py-2 flex-1' />
          <input  type="submit"  value="Send" className='border border-black/50 font-semibold rounded-lg text-center  py-2 px-16 bg-black text-white cursor-pointer hover:text-black hover:border-2 hover:border-black hover:bg-white transition-all duration-300 w-full md:w-auto'/>
        </div>

        <div className="flex items-start  gap-2 mt-4">
          <input  checked={formData.agreed} onChange={HandleChange} name='agreed' type="checkbox" className="mt-1" />
          <p className="text-xs">In accordance with the LGPD (Brazilian General Data Protection Law), I agree to provide the above data so that Touring Cars can contact me to present services. Your name, email, and phone number will be used in accordance with our Privacy Policy.</p>
        </div>
      </form>
    </div>
  </div>
</div>



  )
}

export default FormSection
