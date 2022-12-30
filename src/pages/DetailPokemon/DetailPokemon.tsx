import {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import apiHelper from '../../helper/api';
import { AxiosInterfacePokeDetail } from '../../models/AxiosInterface';
import {PokeDetail} from "../../models/PokeInterface";
import { Collapse } from 'antd';
const {Panel} = Collapse;
function DetailPokemon() {
  const {name} = useParams();
  const [infoPokemon, setInfoPokemon] = useState<PokeDetail | null>(null);
  const getDetailPokemon = async() => {
    try {
      const {data}: AxiosInterfacePokeDetail = await apiHelper.get(`pokemon/${name}`);
      const infoDescription: AxiosInterfacePokeDetail = await apiHelper.get(`pokemon-species/${name}`);
      const habitat = infoDescription.data.habitat;
      const description = infoDescription.data.flavor_text_entries;
      setInfoPokemon(() => ({
        ...data,
        description,
        habitat
      }));
      console.log(infoPokemon?.abilities)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getDetailPokemon();
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='grid place-items-center min-h-screen'>
      <div className="bg-white shadow-md rounded-xl relative w-3/4 md:w-10/12">
        <div className={`${infoPokemon?.types[0].type?.name === 'fire' ? 'bg-red-500' : 'bg-green-500'} h-48 rounded-t-xl`}></div> 
        {/* poke image */}
        <div className="flex justify-center absolute top-20 mx-auto w-full">
          <img src={`https://img.pokemondb.net/artwork/large/${infoPokemon?.name}.jpg`} className="h-48 w-48 rounded-full border-4 border-green-400 p-2 bg-green-300" alt="" />
        </div>

        {/* poke Name */}
        <div className="flex flex-col p-6">
          <div className="flex justify-center mb-6">
            <div className={`${infoPokemon?.types[0].type?.name === 'fire' ? 'bg-red-500' : 'bg-green-500'} text-center mt-16 rounded-full shadow-md max-w-fit py-0.5 px-4`}>
              <h4 className="text-2xl capitalize text-white font-bold">{infoPokemon?.name}</h4>
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-full p-6 rounded-md shadow-md bg-blue-300">
              {infoPokemon?.description.filter((desc, idx) => desc.language.name === 'en' && idx < 7).map((desc, i) => (
                i > 0 && (<span key={i}>{desc.flavor_text.replace(/\r?\n|\r|\u000c/gm, " ")}</span>)
              ) )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 bg-green-500 rounded-md p-4">
              {/* profile */}
              <div>
                <div className="rounded-full shadow-md bg-green-200 py-3 px-4 font-semibold font-serif text-lg mb-3">
                  PROFILE
                </div>
                <div className="px-4 text-white">
                  {/* info type */}
                  <div className="flex space-x-2 text-sm">
                    <p className='font-semibold'>Type :</p>
                    <p className='capitalize'>{infoPokemon?.types[0].type?.name}</p>
                  </div>
                  {/* info height */}
                  <div className="flex space-x-2 text-sm">
                    <p className='font-semibold'>Height :</p>
                    <p>{infoPokemon?.height}m</p>
                  </div>

                  {/* info weight */}
                  <div className="flex space-x-2 text-sm">
                    <p className='font-semibold'>Weight :</p>
                    <p className='capitalize'>{infoPokemon?.weight}kg</p>
                  </div>
                </div>
              </div>

              {/* stats */}
              <div>
                <div className="rounded-full shadow-md bg-green-200 py-3 px-4 font-semibold font-serif text-lg mb-3">
                  STATS
                </div>
                <div className="space-y-1 text-white text-sm px-4 font-medium">
                  {infoPokemon?.stats.map((stats, idx) => (
                    <div className="flex space-x-2">
                      <p className='capitalize' key={idx}>{`=> ${stats.stat.name} :`}</p>
                      <p className='capitalize' key={idx}>{`${stats.base_stat}`}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* abilities */}
              <div>
                <div className="rounded-full shadow-md bg-green-200 py-3 px-4 font-semibold font-serif text-lg mb-3">
                  ABILITIES
                </div>
                <div className="space-y-1 text-white text-sm px-4 font-medium">
                  {infoPokemon?.abilities.map((ability, idx) => (
                    <p className='capitalize' key={idx}>{`=> ${ability.ability.name}`}</p>
                  ))}
                </div>
              </div>
              
              {/* moves */}
              <div>
                <div className="rounded-full shadow-md bg-green-200 py-3 px-4 font-semibold font-serif text-lg mb-3">
                  MOVES
                </div>
                <div className="text-white text-sm px-4 font-medium">
                  {infoPokemon?.moves.filter((move, idx) => idx < 10).map((move, idx) => (
                      <p className='capitalize' key={idx}>{`=> ${move.move.name}`}</p>
                    // <div className="grid md:grid-cols-2">
                    // </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPokemon