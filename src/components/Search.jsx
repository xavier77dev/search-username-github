import { useContext } from "react";
import useFetch from "../helpers/useFetch.js";
import { ContextSearch } from "../context/ProviderSearch.jsx";

const Search = () => {
  const {searchUser, setSearchUser, setInfoUser, setInfoRepo, setSpinner} = useContext(ContextSearch);

  const data = () => useFetch(`https://api.github.com/users/${searchUser}`);
  const infoRepository = () => useFetch(`https://api.github.com/users/${searchUser}/repos`)
  
  const handleUser = async (e) => {
    e.preventDefault();
    setInfoUser([{data: [], error: false, found: false}]);
    if (searchUser.trim() == "") {
      return;
    }
    setSpinner(true);    
    setSearchUser("");
    setInfoUser([await data()]);
    setInfoRepo(await infoRepository());
    setSpinner(false);
  }

  return (
    <form onSubmit={handleUser} 
    className="mb-14 w-[80%] sm:w-[40%] bg-[#121322] rounded-md flex items-center justify-center object-fill h-11">  

      <button className="bg-indigo-600 w-[50px] p-2 rounded-l-md h-full">
        <i className="fa-solid fa-magnifying-glass  text-white"></i>
      </button>

      <div className="w-[90%] h-full">
        <input onChange={({target}) => setSearchUser(target.value.trim())} value={searchUser}
        className="bg-[#121322] h-full w-full text-white focus:outline-none rounded-md capitalize text-center" type="text" placeholder="username on github"/>
      </div>
    </form>
  )
}

export default Search
