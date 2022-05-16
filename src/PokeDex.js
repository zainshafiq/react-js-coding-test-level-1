import "./App.css";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Modal from "react-modal";
import React from "react";

// Import extra components
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { FaFire, FaWater } from 'react-icons/fa';
import { GiHighGrass, GiWindHole } from 'react-icons/gi';
import Pdf from "react-to-pdf";

function PokeDex() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [input, searchInput] = useState('')
  const ref = React.createRef();

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

  const pokedexURL = (`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${0}`)
  const pokedexURL_Grass = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${0}`)
  const pokedexURL_Fire = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${3}`)
  const pokedexURL_Water = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${6}`)
  const pokedexURL_Fly = (`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${15}`)

  // Calling API and Retrieved data by making https request through axios (Loader timer:  4s)
  // Source : (1) https://www.npmjs.com/package/axios#example
  //        : (2) https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
  const getData_Details = async () => {
    await axios.get(pokedexURL)
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
    await axios.get(pokedexURL_Grass)
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
    await axios.get(pokedexURL_Fire)
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
    await axios.get(pokedexURL_Water)
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

  const getData_Details4 = async () => {
    await axios.get(pokedexURL_Fly)
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
    getData_Details4()
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

  // Add a search bar on top of the bar for searching, search will run on keyup event
  // Ref Source: https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d
  const updateInput =  (event) => {
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(event.toLowerCase())
    })

    if(filtered.length !== 0) {
      setPokemons(filtered)
      searchInput('')
      return;
    }

    if(filtered.length === 0) {
      return (
				<div style={{ padding:'10rem 1.5rem', textAlign:'center' }}>
					There is no data for '{input}'<br /> Please make sure the Pokemon's name is correct.
				</div>
			)
    }
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
              on keyup event DONE DONE
            </li>
            <li>Implement sorting and pagingation DONE DONE </li>
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
            <div className="flex-container">
              <div>
                <img
                  src="https://www.pngmart.com/files/13/Mewtwo-Transparent-Images-PNG.png"
                  alt="Mewtwo"
                  style={{margin:'100px 0 0 300px'}}
                  width='500px'
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo2.png?v=1647303194"
                  alt="PokeDex Logo"
                  style={{ padding: "0", margin:'-100px 0 50px 0' }}
                  width='500px'
                />
              </div>
              <div>
                <img
                  src="https://www.pngmart.com/files/12/Mega-Charizard-PNG-File.png"
                  alt="Mega Charizard"
                  style={{margin:'50px 400px 0 0'}}
                  width='500px'
                />
              </div>
            </div>
            <div style={{margin: '-600px 0 0 0'}}>
              <input 
                placeholder=" Search Pokemon.." 
                className='bg-warning text-primary border-white rounded-pill' 
                style={{margin:'0 75px 0 0'}} 
                type="text" 
                name="name"
                onChange={(e) => {
                  if(!e.target.value) {
                    getData_Details()
                  }
                  updateInput(e.target.value)
                }}
              />
              <div style={{margin:'20px 0 25px 75px'}}>
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
              <div className="margin-link" style={{margin:'0 0 0 75px'}}>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink className="bg-light text-success" onClick={() => getData_Details1()}> <GiHighGrass /> </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="bg-danger text-warning" onClick={() => getData_Details2()}> <FaFire />  </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="bg-primary text-light" onClick={() => getData_Details3()}> <FaWater /> </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="bg-secondary text-light" onClick={() => getData_Details4()}> <GiWindHole /> </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
            </div>
          </>
        )}
      </header>

      {pokemonDetail && (
        <Modal isOpen={pokemonDetail} contentLabel={pokemonDetail?.name || ""} onRequestClose={() => {setPokemonDetail(null)}} style={customStyles}>          {/* <div>
          Requirement:
          <ul>
            <li>show the sprites front_default as the pokemon image DONE</li>
            <li>
              Show the stats details - only stat.name and base_stat is
              required in tabular format DONE DONE
            </li>
            <li>Create a bar chart based on the stats above DONE BUT INSTEAD OF BAR I USED RADAR TYPE </li>
            <li>Create a  buttton to download the information generated in this modal as pdf. (images and chart must be included) DONE DONE</li>
          </ul>
          </div> */}
        
          <div ref={ref} className='bg-warning' style={{textAlign:'center'}}>
            <img width='200px' style={{textAlign:'center'}} src={pokemonDetail.sprites.front_default} />
            <Table className="text-light bg-primary text-xl">
              <thead>
                <tr>
                  <th> LEGENDS </th>
                  <th> BASE STATS </th>
                </tr>
              </thead>
              <tbody>
                {pokemonDetail.stats.map((stat, index) => {
                  return ( 
                    <tr key={index}>
                      <td align='left'>{stat.stat.name.toUpperCase()}</td>
                      <td align='center'>{stat.base_stat}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

            {/* Create a bar chart based on the stats above
            Ref Source: https://www.geeksforgeeks.org/create-a-radar-chart-using-recharts-in-reactjs/ */}
            <div>
            <RadarChart height={250} width={750} outerRadius="80%" data={pokemonDetail.stats}>
              <PolarGrid stroke="black" />
              <PolarAngleAxis stroke="black" dataKey='stat.name'/>
              <PolarRadiusAxis stroke="black" />
              <Radar dataKey="base_stat" stroke="black" fill="white" fillOpacity={0.8}/>
            </RadarChart>
            </div>

            {/* Create a  buttton to download the information generated in this modal as pdf. (images and chart must be included)
            Ref Source: https://www.npmjs.com/package/react-to-pdf */}
            <div>
              <Pdf targetRef={ref} filename="pokedex-charts.pdf">
                {({ toPdf }) => <button className='bg-danger text-light' onClick={toPdf}>Generate Pdf</button>}
              </Pdf>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PokeDex;