// this is the same as "main" in java
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">  // for darkmode background
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipCompenent content="settings" position="Top">
                        <button>
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