import React from 'react'
import "../assets/styles/historyStyle.css"
export default function GitHistory() {
  return (
    <>
    <header className='mt-5'>
        <p className='display-4 fw-bold text-center p-2 text-light'>
            Days I   &nbsp;
            <span style={{color:"var(--purpleColor)"}}>Code</span>
            
        </p>
        <table className='historyTable'>
            <thead>
                <tr>
                    <th className="text-light text-center">Jan</th>
                    <th className="text-light text-center">Feb</th>
                    <th className="text-light text-center">Mar</th>
                    <th className="text-light text-center">Apr</th>
                    <th className="text-light text-center">May</th>
                    <th className="text-light text-center">Jun</th>
                    <th className="text-light text-center">Jul</th>
                    <th className="text-light text-center">Aug</th>
                    <th className="text-light text-center">Sep</th>
                    <th className="text-light text-center">Oct</th>
                    <th className="text-light text-center">Nov</th>
                    <th className="text-light text-center">Dec</th>
                </tr>
            </thead>
            <tbody>
                {/* 7 days , each one with 4 weeks  */}
                <tr className=''>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                </tr>
                <tr className=''>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
</tr>

                <tr className=''>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                </tr>
                <tr className=''>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                </tr>
                <tr className=''>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
</tr>

<tr className=''>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
      <div className="dayCell activeFour"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
      <div className="dayCell activeTwo"></div>
    </div>
  </td>
  <td className='justify-content-center'>
    <div className="boxesContainer d-flex justify-content-center">
      <div className="dayCell activeFour"></div>
      <div className="dayCell activeThree"></div>
      <div className="dayCell activeOne"></div>
      <div className="dayCell activeFive"></div>
    </div>
  </td>
</tr>

                <tr className=''>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell activeOne"></div>
                            <div className="dayCell activeFour"></div>
                            <div className="dayCell activeTwo"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell activeTwo"></div>
                            <div className="dayCell activeOne"></div>
                            <div className="dayCell activeFour"></div>
                            <div className="dayCell activeFive"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                    <td className=' justify-content-center'>
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                            <div className="dayCell "></div>
                            <div className="dayCell"></div>
                        </div>
                        
                    </td>
                </tr>
               
            </tbody>
           
        </table>
        <div className='d-flex mt-2 text-light justify-content-between' style={{width:"60vw",margin:"auto"}}>
        <p>314 Contributions in this last year</p>
                        <div className='d-flex
                        '>Less
                        <div className="boxesContainer d-flex justify-content-center">
                            <div className="dayCell ativeOne"></div>
                            <div className="dayCell activeTwo"></div>
                            <div className="dayCell activeThree"></div>
                            <div className="dayCell activeFour"></div>
                            <div className="dayCell activeFive"></div>
                            </div>
                       More
                       </div>
        </div>
    </header>
    </>
  )
}
