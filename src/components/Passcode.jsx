import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Passcode
const CORRECT_PASSCODE = '1018' 

function Passcode() {
    const [passcode, setPasscode] = useState([])
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const handleNumberClick = (number) => {
      if (passcode.length < 6) {
        const newPasscode = [...passcode, number]
        setPasscode(newPasscode)
  
        if (newPasscode.length === 4) {
          const enteredPasscode = newPasscode.join('')
          if (enteredPasscode === CORRECT_PASSCODE) {
            setMessage('Yayy!! :)')
            setTimeout(() => {
              setMessage('Redirecting...')
              navigate("/question");
              
            }, 500)
          } else {
            setMessage('Incorrect passcode, hint: our anniversary date!')
            setTimeout(() => {
              setPasscode([])
              setMessage('')
            }, 4000)
          }
        }
      }
    }
  
    const handleCancel = () => {
      setPasscode([])
      setMessage('')
    }
  return (
    <div className="min-h-screen w-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center max-w-full">
            {/* Title */}
            <h1 className="text-2xl font-light mb-8">Enter Passcode</h1>

            {/* Passcode Dots */}
            <div className="flex gap-4 mb-16">
            {[...Array(4)].map((_, i) => (
                <div
                key={i}
                className={`w-3.5 h-3.5 rounded-full ${
                    i < passcode.length ? 'bg-white' : 'border-2 border-zinc-500'
                }`}
                />
            ))}
            </div>

            {/* Message */}
            {message && (
            <div className={`mb-4 -mt-9 text-sm font-bold ${message === 'Yayy!! :)' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
            </div>
            )}

            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-full">
            {[
                { num: 1 },
                { num: 2 },
                { num: 3 },
                { num: 4 },
                { num: 5 },
                { num: 6 },
                { num: 7 },
                { num: 8 },
                { num: 9 },
            ].map(({ num }) => (
                <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                >
                <span className="text-3xl font-light">{num}</span>
                </button>
            ))}
            <div className="col-start-2">
                <button
                onClick={() => handleNumberClick(0)}
                className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                >
                <span className="text-3xl font-light">0</span>
                </button>
            </div>
            </div>

            {/* Cancel Button */}
            <button
            onClick={handleCancel}
            className="text-lg text-white/90 hover:text-white active:text-white/70 transition-colors"
            >
            Cancel
            </button>
          </div>
        </div>


  )
}

export default Passcode