import coden from './coden.png'
import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/form";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={coden}  alt="logo" width={250} height={250} />
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default App;


