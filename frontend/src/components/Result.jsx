import React from 'react'

const Result = () => {
  return (
    <div className="text-left mb-8 ">
       <h2 className="text-2xl mb-3">Results and Recommendation for safety</h2>
        <div className="border-2 border-white h-96 p-3 overflow-auto text-lg md:h-12/12 md:12/12">
          <p>Water is Safe</p>
          <p className="font-bold text-orange-500">Recommendations: </p>
          <ul className=" list-disc ml-8">
            <li>Boil water bef...</li>
          </ul>
        </div>
    </div>
  )
}

export default Result
