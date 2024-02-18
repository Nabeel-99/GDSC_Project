import React from 'react'

const GoogleMap = () => {
  return (
    <div>
        <h2 className="text-2xl mb-3">Water Quality Indicators</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5535.484126347187!2d18.213830011113206!3d46.07618410247494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shu!4v1708263407039!5m2!1sen!2shu"  
        className="w-full h-96 md:h-12/12 md:12/12 border-2 border-white"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap
