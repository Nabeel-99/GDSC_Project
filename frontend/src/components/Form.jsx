import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    pH: 0,
    turbidity: 0,
    bacterialContent : 0,
    latitude: '',
    longitude: ''
  })



  const hanldeSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="">
      <h2 className="text-2xl mb-3">Submit Water Quality Data</h2>
      <form className="flex flex-col text-left border-2 border-white p-3 h-12/12 w-12/12 overflow-auto" onSubmit={hanldeSubmit}>
        <label className="mb-3" htmlFor="ph">pH: </label>
        <input type="number" step={0.1} id="ph" className="border border-black mb-2 text-black bg-white px-2" value={formData.pH} onChange={(e) => setFormData(e.target.value)} required />
        <label className="mb-3" htmlFor="turbidity">Turbidity: </label>
        <input type="number" step={0.01} id="turbidity" className="border border-white mb-2  text-black bg-white px-2" value={formData.turbidity} onChange={(e) => setFormData(e.target.value)}required/>
        <label className="mb-3" htmlFor="bacteria">Bacterial Content:</label>
        <input type="number" id="bacteria" className="36 border border-white mb-2  text-black bg-white px-2" value={formData.bacterialContent} onChange={(e) => setFormData(e.target.value)} required/>
        <label className="mb-3">Location:</label>
        <div className="flex gap-10">
           <div className="flex flex-col">
            <label htmlFor="longitude">Longitude:</label>
            <input type="text" id="longitude" className="border border-white mb-2 w-24 p-1 text-black bg-white px-2 md:w-32" value={formData.longitude} onChange={(e) => setFormData(e.target.value)} required/>  
          </div>
          <div className="flex flex-col">
            <label htmlFor="latitude">Latitude:</label>
            <input type="text" id="latitude" className="border border-white mb-2 w-24  p-1  text-black bg-white px-2 md:w-32" value={formData.latitude} onChange={(e) => setFormData(e.target.value)} required/>
          </div>
        </div>
        <div className="flex items-center">
        <button type="submit" className="bg-green-700 border border-white text-white w-18 h-12 mt-3">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
