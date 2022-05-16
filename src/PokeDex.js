import "./App.css";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Modal from "react-modal";

// Import extra components
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { FaFire, FaWater } from 'react-icons/fa';
import { GiHighGrass, GiWindHole } from 'react-icons/gi';

function PokeDex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
      color: "white",
    },
    overlay: { backgroundColor: "grey" },
  };

  const pokedexURL_1 = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${0}`)
  const pokedexURL_2 = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${3}`)
  const pokedexURL_3 = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${6}`)
  const pokedexURL_4 = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${15}`)

  // Calling API and Retrieved data by making https request through axios (Loader timer:  4s)
  // Source : (1) https://www.npmjs.com/package/axios#example
  //        : (2) https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
  const getData_Details = async () => {
    await axios.get(pokedexURL_1)
    .then(response => {
      if(response.data.results.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setPokemons(response.data.results)
        console.log(response.data.results, 'Successfully retrieved')
        console.log(response.data.results[0])
      }
    })
    .catch(error =>
      console.log(error, 'Failed to retrive!')
    )
    .finally(() => setIsLoading(true)); // Complete loading success/fail
  }

  const getData_Details1 = async () => {
    await axios.get(pokedexURL_2)
    .then(response => {
      if(response.data.results.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setPokemons(response.data.results)
        console.log(response.data.results, 'Successfully retrieved')
        console.log(response.data.results[5])
      }
    })
    .catch(error =>
      console.log(error, 'Failed to retrive!')
    )
    .finally(() => setIsLoading(true)); // Complete loading success/fail
  }

  const getData_Details2 = async () => {
    await axios.get(pokedexURL_3)
    .then(response => {
      if(response.data.results.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setPokemons(response.data.results)
        console.log(response.data.results, 'Successfully retrieved')
        console.log(response.data.results[10])
      }
    })
    .catch(error =>
      console.log(error, 'Failed to retrive!')
    )
    .finally(() => setIsLoading(true)); // Complete loading success/fail
  }

  const getData_Details3 = async () => {
    await axios.get(pokedexURL_4)
    .then(response => {
      if(response.data.results.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setPokemons(response.data.results)
        console.log(response.data.results, 'Successfully retrieved')
        console.log(response.data.results[15])
      }
    })
    .catch(error =>
      console.log(error, 'Failed to retrive!')
    )
    .finally(() => setIsLoading(true)); // Complete loading success/fail
  }

  useEffect(() => {
    getData_Details()
    getData_Details1()
    getData_Details2()
    getData_Details3()
  },[])

  const getPokedex_Details = async (url) => {
    await axios.get(url)
    .then(response => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      setPokemonDetail(response.data)
      console.log(response.data, 'Successfully retrieved')
    })
    .catch(error =>
      console.log(error, 'Failed to retrive!')
    )
    .finally(() => setIsLoading(true)); // Complete loading success/fail
  }

  if (!isLoading && pokemons.length === 0) {
    return (
      <div>
        <header className="App-header">
          {/* <h1>Welcome to pokedex !</h1>
          <h2>Requirement:</h2>
          <ul>
            <li>
              Call this api:https://pokeapi.co/api/v2/pokemon to get pokedex, and show a list of pokemon name. DONE DONE
            </li>
            <li>Implement React Loading and show it during API call DONE DONE </li> 
            <li>when hover on the list item , change the item color to yellow. DONE DONE </li>
            <li>when clicked the list item, show the modal below. DONE DONE</li>
            <li>
              Add a search bar on top of the bar for searching, search will run
              on keyup event
            </li>
            <li>Implement sorting and pagingation</li>
            <li>Commit your codes after done</li>
            <li>If you do more than expected (E.g redesign the page / create a chat feature at the bottom right). it would be good.</li>
          </ul> */}
        </header>
      </div>
    );
  }

  return (
    <div>
      <header className="App-header">
        {isLoading ? (
          <>
            <div className="App">
              <header className="App-header">
                <b>
                  <img
                    src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
                    className="App-logo"
                    alt="logo"
                    style={{ padding: "10px" }}
                  />
                </b>
              </header>
            </div>
          </>
        ) : (
          <>
            {/* <h1>Welcome to pokedex !</h1>
            <b>Implement Pokedex list here</b> */}
            <img
              src="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo2.png?v=1647303194"
              alt="PokeDex Logo"
              style={{ padding: "0" , marginBottom:'0px' }}
              width='25%'
            />
            <div style={{marginTop:'-150px'}}>
              {
                pokemons.map((pokemon,index) => (
                  <tr>
                    <td className="hover-list padding-item" onClick={() => {getPokedex_Details(pokemon.url)}}>
                      {pokemon.name.toUpperCase()}
                    </td>
                  </tr>
                ))
              }
            </div>

            {/* Implement sorting and pagination
            Ref Source = https://www.geeksforgeeks.org/reactjs-reactstrap-pagination-component/ */}
            <div className="margin-link">
            <Pagination>
                <PaginationItem>
                  <PaginationLink className="bg-light text-success" onClick={() => getData_Details()}> <GiHighGrass /> </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="bg-danger text-warning" onClick={() => getData_Details1()}> <FaFire />  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="bg-primary text-light" onClick={() => getData_Details2()}> <FaWater /> </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="bg-secondary text-light" onClick={() => getData_Details3()}> <GiWindHole /> </PaginationLink>
                </PaginationItem>
            </Pagination>
            </div>
          </>
        )}
      </header>
      {pokemonDetail && (
        <Modal
          isOpen={pokemonDetail}
          contentLabel={pokemonDetail?.name || ""}
          onRequestClose={() => {
            setPokemonDetail(null);
          }}
          style={customStyles}
        >
          <div>
            Requirement:
            <ul>
              <li>show the sprites front_default as the pokemon image</li>
              <li>
                Show the stats details - only stat.name and base_stat is
                required in tabular format
              </li>
              <li>Create a bar chart based on the stats above</li>
              <li>Create a  buttton to download the information generated in this modal as pdf. (images and chart must be included)</li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PokeDex;