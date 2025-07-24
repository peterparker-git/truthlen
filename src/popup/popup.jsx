import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Popup() {
  const accountToastId = useRef(null)
  const postToastId = useRef(null)

  function handleVerify() {
    if (accountToastId.current) return

    accountToastId.current = toast.loading('🔍 Checking account...')
    setTimeout(() => {
      toast.dismiss(accountToastId.current)
      toast.success('✅ Score: 86% (Likely real)', {
        icon: '🛡️',
        style: {
          background: '#F5F0E5',
          color: '#2E364F',
          border: '1px solid #DCAB6B',
        },
      })
      accountToastId.current = null
    }, 2500)
  }

  function handleVerifyPost() {
    if (postToastId.current) return

    postToastId.current = toast.loading('🧠 Analyzing post...')
    setTimeout(() => {
      toast.dismiss(postToastId.current)
      toast.success('📰 Post appears genuine', {
        icon: '✅',
        style: {
          background: '#F5F0E5',
          color: '#2E364F',
          border: '1px solid #DCAB6B',
        },
      })
      postToastId.current = null
    }, 2500)
  }

  return (
    <div className="w-80 min-h-[200px] p-4 rounded-2xl shadow-xl text-[#2E364F]" style={{ backgroundColor: '#F5F0E5' }}>
      <h1 className="text-2xl font-bold text-center mb-2 tracking-wide">TruthLens</h1>
      <p className="text-sm text-center mb-4 text-[#6F6F6F]">
       Real-time check for fake profile and post !
      </p>

      <button
        onClick={handleVerify}
        className="w-full bg-[#EF5939] hover:bg-[#d64e30] text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out mb-2 hover:shadow-[0_0_15px_#EF593980]
"
      >
        Verify Account
      </button>

      <button
        onClick={handleVerifyPost}
        className="w-full bg-[#2D5D7C] hover:bg-[#244c66] text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:shadow-[0_0_15px_#2D5D7C]
"
      >
        Verify Post
      </button>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Popup
