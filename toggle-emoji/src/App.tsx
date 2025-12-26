import { useCallback, useState } from "react"

function App() {
  const [state, setState] = useState<
    "sad" | "becoming-happy-1" | "becoming-happy-2" | "happy" | "becoming-sad-1" | "becoming-sad-2"
  >("sad")

  const baseTransitionTime = 500

  const handleToggle = useCallback(() => {
    if (state !== "sad" && state !== "happy") return

    if (state === "sad") {
      setState("becoming-happy-1")

      setTimeout(() => {
        setState("becoming-happy-2")

        setTimeout(() => {
          setState("happy")
        }, baseTransitionTime);

      }, baseTransitionTime)
      return
    }

    setState("becoming-sad-1")

    setTimeout(() => {
      setState("becoming-sad-2")

      setTimeout(() => {
        setState("sad")
      }, baseTransitionTime);

    }, baseTransitionTime)
  }, [state])

  return (
    <div className="flex h-screen justify-center w-full items-center">
      <div className="rounded-full w-52 bg-slate-600 p-2">
        <button
          className={`relative rounded-full w-full p-2 transition-colors duration-500 z-0 
            ${state === "happy" ? "bg-green-400" : ""}
            ${state === "becoming-sad-1" ? "bg-green-400" : ""}
            ${state === "becoming-sad-2" ? "bg-slate-400" : ""}
            ${state === "sad" ? "bg-slate-400" : ""}
            ${state === "becoming-happy-1" ? "bg-slate-400" : ""}
            ${state === "becoming-happy-2" ? "bg-green-400" : ""}
          `}
          onClick={handleToggle}>
          <div
            className={`absolute rounded-full bg-[#f7c027] w-16 h-16 z-[-1] transition-all duration-[800ms] delay-[80ms] ease-linear shadow
              ${["sad", "becoming-sad-1", "becoming-sad-2"].includes(state) ? "left-[14px]" : ""}
              ${["happy", "becoming-happy-1", "becoming-happy-2"].includes(state) ? "left-full -translate-x-[4.8rem]" : ""}
            `}
          />
          <p className={`text-6xl drop-shadow-[8px_8px_8px_0px_rgb(0,0,0)] rounded-full z-1
            ${state === "becoming-happy-1" ? "emoji-forward-1" : ""}
            ${state === "becoming-happy-2" ? "emoji-forward-2" : ""}
            ${state === "becoming-sad-1" ? "emoji-backward-1" : ""}
            ${state === "becoming-sad-2" ? "emoji-backward-2" : ""}
            ${state === "happy" || state === "becoming-sad-1" || state === "becoming-happy-2" ? "text-right" : "text-left"}
          `}>
            {state === "happy" || state === "becoming-sad-1" || state === "becoming-happy-2" ? "😄" : "😔"}
          </p>
        </button>
      </div>
    </div>
  )
}

export default App
