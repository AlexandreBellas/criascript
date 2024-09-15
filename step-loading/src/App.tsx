import { Fragment, useCallback, useState } from "react"

const steps = [
  "About You",
  "About Book",
  "Review",
  "Signing",
  "Contract"
]

function App() {

  const [currStep, setCurrStep] = useState(0)

  const handleUp = useCallback(() => {
    if (currStep === steps.length - 1) return
    setCurrStep(prev => prev + 1)
  }, [currStep])

  const handleDown = useCallback(() => {
    if (currStep === 0) return
    setCurrStep(prev => prev - 1)
  }, [currStep])

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-zinc-900">
      <div className="flex bg-zinc-800 p-6 rounded-xl gap-4">
        {steps.map((stepDesc, idx) => (
          <Fragment key={stepDesc}>
            <div className="relative flex flex-col items-center z-50 w-24">
              {idx < steps.length - 1 && (
                <div
                  className={`absolute h-1 transition-all
                    bg-gradient-to-r from-cyan-800 from-50% to-gray-600 to-50% bg-[length:200%_100%] duration-1000
                    ${idx < currStep ? "bg-left" : "bg-right"}
                    w-28 translate-y-2 translate-x-1/2 z-0`}
                />
              )}
              <p className={`relative rounded-full w-6 h-6 text-center ${idx <= currStep ? "bg-cyan-800" : "bg-gray-600"} transition-colors z-50 delay-500 duration-700`}>
                {idx + 1}
              </p>
              <p className={`transition-all delay-500 ${idx <= currStep ? "text-white font-medium" : "text-gray-600"}`}>{stepDesc}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <button
          className="p-2 rounded-md bg-cyan-800 hover:bg-sky-700 disabled:bg-cyan-950"
          onClick={handleDown}
          disabled={currStep === 0}>
          Previous
        </button>
        <button
          className="p-2 rounded-md bg-cyan-800 hover:bg-sky-700 disabled:bg-cyan-950"
          onClick={handleUp}
          disabled={currStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
