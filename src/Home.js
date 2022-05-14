import "./App.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import alert
import Swal from 'sweetalert2'

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
            hidden={isReady}
            src="https://i.dlpng.com/static/png/1269952-logo-pokemonpng-pokemon-logo-png-1600_1067_preview.png"
            alt="Pokemon Logo"
            style={{ padding: "5"}}
            width='50%'
          />
        <NavLink className='hover-link' to='/pokedex'>
          <img
            hidden={!isReady}
            src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
            className="App-logo"
            alt="logo"
            style={{ padding: "10px" }}
          />
        </NavLink>

        {/* Commented out the requirement */}
        {/* <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b> */}
        <h2>Are you ready to be a pokemon master?</h2>
        <input 
          type="text" 
          name="name"
          onChange={(e) => {
            let text = e.target.value
          
            // Conditional statements to check for text input 
          
            // if (text === 'Ready!' || 'ready!' || 'READY!')
            //   setIsReady(true)
          
            // else if (text === 'Ready' || 'ready' || 'READY') {
            //   setIsReady(false)
            //   // If the user miss the <!> sign  
            //   Swal.fire(
            //     'Almost there!',
            //     'You miss something',
            //     'info'
            //   )
            // }

            // else
            //   return setIsReady(false)

            // Conditional statements for inline if else (conditional rendering)
            // Source: https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function

            // Show the hidden image and make it clickable that goes to /pokedex when the input below is "Ready!"
            text == ("Ready!" || "ready!" || "READY!")  ? setIsReady(true) : setIsReady(false)
          }}
        />
        <br/>
        
        {/* Hide the red text away when "Ready!" is in the textbox */}
        { (isReady) ? (null && undefined) : 
          <span style={{ color: "red" }}>I am not ready yet!</span>
        }
      </header>
    </div>
  );
}

export default Home;