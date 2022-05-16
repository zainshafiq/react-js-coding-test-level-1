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
        <div className="flex-container">
          <div>
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-PNG-Photo-Clip-Art-Image.png"
              alt="Squirtle"
            style={{margin:'100px 0 0 300px'}}
            width='600px'
          />
          </div>
          <div>
            <img
              hidden={isReady}
              src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"
              alt="Pokemon Logo"
              style={{margin:'-100px 50px 0 0'}}
              width='600px'
            />
          </div>
          <div>
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Pokemon-Pikachu-PNG-Images.png"
              alt="Pikachu"
            style={{margin:'50px 400px 0 0'}}
            width='500px'
          />
          </div>
        </div>
        {/* Commented out the requirement */}
        {/* <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b> */}
        <div style={{margin: '-300px 0 0 0'}}>
          <h2 style={{padding: '0 0 30px 0'}}> Are you ready to be a pokemon master? </h2>
          <input 
            placeholder="  Type In Ready!" 
            className='bg-warning text-primary border-white rounded-pill'
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
        </div>
        
        <NavLink className='hover-link mt-5' to='/pokedex' style={{textDecoration: 'none'}}>
          <>
            <p hidden={!isReady}  style={{color: 'white'}}>
              Press the Pokeball!
            </p>
            <img
              hidden={!isReady}
              src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
              className="App-logo"
              alt="logo"
              style={{ padding: "30px" }}
            />
          </>
        </NavLink>
        <br/>
        
        {/* Hide the red text away when "Ready!" is in the textbox */}
        { (isReady) ? (null && undefined) : 
          <span style={{ color: "red" , padding: '10px 0 25px 0'}}>I am not ready yet!</span>
        }
      </header>
    </div>
  );
}

export default Home;