import React from 'react'

function Dashboard() {
  return (
    <div className='p-25'>
<div className="p-6 bg-slate-100 rounded-xl shadow-md text-gray-800 max-w-xl mx-auto">
  {/* Greeting and Name */}
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Good Morning,</h2>
    <p className="text-2xl font-bold text-teal-600">Dr. Mingma Sherpa</p>
    <p className="text-sm text-gray-500 mt-1">Your schedule today</p>
  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-teal-100 text-teal-800 rounded-lg p-4 text-center">
      <p className="text-3xl font-bold">9</p>
      <p className="text-sm font-medium mt-1">Patients</p>
    </div>

    <div className="bg-orange-100 text-orange-800 rounded-lg p-4 text-center">
      <p className="text-3xl font-bold">3</p>
      <p className="text-sm font-medium mt-1">Surgeries</p>
    </div>

    <div className="bg-purple-100 text-purple-800 rounded-lg p-4 text-center">
      <p className="text-3xl font-bold">2</p>
      <p className="text-sm font-medium mt-1">Discharges</p>
    </div>
  </div>
</div>

{/* small cards */}


<div className="flex flex-wrap justify-between gap-6 p-6 bg-gray-50">
  {[...Array(4)].map((_, i) => (
    <div
      key={i}
      className="flex-1 min-w-[220px] max-w-sm bg-white rounded-xl shadow-md p-6 text-gray-800 font-sans"
    >
      {/* Top section with icon and number */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
            {/* User-plus icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v6M15 12h6M8 7a4 4 0 11-8 0 4 4 0 018 0zM6 21v-2a4 4 0 014-4h4"
              />
            </svg>
          </div>
          <div>
            <p className="text-3xl font-bold">890</p>
            <p className="text-sm text-gray-500">New Patients</p>
          </div>
        </div>

        {/* Percentage */}
        <div className="flex items-center text-green-600 font-semibold space-x-1">
          {/* Up arrow icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span>+40%</span>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <a href="#" className="text-teal-600 hover:underline">
          View All
        </a>
        <span>this month</span>
      </div>
    </div>
  ))}
</div>



    </div>
  )
}

export default Dashboard
