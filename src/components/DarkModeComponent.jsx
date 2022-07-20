import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

  return (
<button
      onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
      style={{
        border: `1px solid ${darkMode ? "black" : "white"}`,
        background: "none",
        color: darkMode ? "black" : "white",
      }}
    >
      Toggle Dark Mode
    </button>
  )
}
