// this is the same as "main" in java
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // all the 
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

const App = () => {
  return (
    <div>
        hello world!
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">  // for darkmode background
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipCompenent content="Settings" position="Top">
                        <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white">
                            <FiSettings />
                        </button>
                    </TooltipCompenent>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App