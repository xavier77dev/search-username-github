import { useContext, useEffect } from "react"
import Information from "./components/Information"
import { ContextSearch } from "./context/ProviderSearch"
import Search from "./components/Search";
import Spinner from "./components/Spinner";

function SearchUserApp() {
  const {infoUser, setInfoUser, spinner} = useContext(ContextSearch);
  const {data, found} = infoUser[0];
  
  useEffect(() => { 

    const setTimeCurrent = setTimeout(() => {
      if (!found) return;

      setInfoUser([{...infoUser[0], found: false}]);
    }, 2500);  

    return () => clearTimeout(setTimeCurrent);
  }, [infoUser]);

  return (
    <div className="md:flex md:flex-col min-h-screen bg-[#121322] font-Lato">
      <div className="md:h-[30vh] h-[200px] bg-custom-image bg-cover bg-center flex justify-center items-center">
      <Search/>
      </div>
      
      <div className="md:h-[70vh]  flex flex-col justify-start items-center">
        {
          data?.length == 0 ? (
            <div className="text-center">
                { found 
                  ?
                  <h2 className="p-2 bg-red-600 text-3xl uppercase font-semibold">username not found</h2>
                  :
                  <h2 className="text-3xl text-indigo-600 uppercase mt-7 mb-3 font-semibold">search github users</h2>
                }
              <i className="fa-brands fa-github-alt text-[300px]"></i> 
            </div>
          )
          : spinner ? <Spinner/> : <Information/> 
        }
      </div>
    </div>
  )
}

export default SearchUserApp
