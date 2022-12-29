import apiHelper from "../../helper/api";
import { useEffect, useState } from "react";
import AxiosInterfacePoke from "../../models/AxiosInterface";
import PokeList from "../../models/PokeInterface";
function Home() {
  const [pokemonList, setPokemonList] = useState<PokeList[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>("");
  const getDataPokemon = async (params: string | null = "") => {
    try {
      const { data }: AxiosInterfacePoke = await apiHelper.get(
        `pokemon${params}`
      );
      setPokemonList(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error) {}
  };

  const goToNextPage = () => {
    let params = nextPageUrl?.replace("https://pokeapi.co/api/v2/pokemon", "");
    getDataPokemon(params);
  };

  const goToPrevPage = () => {
    let params =
      (prevPageUrl !== "https://pokeapi.co/api/v2/pokemon" &&
        prevPageUrl?.replace("https://pokeapi.co/api/v2/pokemon", "")) ||
      prevPageUrl;
    getDataPokemon(params);
  };

  useEffect(() => {
    getDataPokemon();
    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen space-y-6">
      <h3 className="text-2xl font-semibold">LIST POKEMON</h3>
      {/* area list pokemon */}
      <div className="w-full space-y-2 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {pokemonList.map((pokemon, idx) => (
          <div
            className="rounded-md shadow-md bg-white px-6 py-4 space-y-4 items-center cursor-pointer"
            key={idx}
          >
            <div className="flex items-center w-full justify-center">
              <img
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                alt="pokemon"
                className="text-center"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <h4 className="text-xl capitalize font-semibold text-center">
              {pokemon.name}
            </h4>
          </div>
        ))}
      </div>
      
      {/* pagination */}
      <div className="flex space-x-2">
        {
          prevPageUrl && (
            <button className="px-4 py-1 text-sm font-medium bg-green-300 rounded-sm" onClick={goToPrevPage}>Prev</button>
          )
        }
        {
          nextPageUrl && (
            <button className="px-4 py-1 text-sm font-medium bg-red-300 rounded-sm" onClick={goToNextPage}>Next</button>
          )
        }
      </div>
    </div>
  );
}

export default Home;
