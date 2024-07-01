import { createContext, useState } from "react"

export const ContextSearch = createContext();

const ProviderSearch = ({children}) => {
  const [searchUser, setSearchUser] = useState("");
  const [infoUser, setInfoUser] = useState([{
    data: [],
    found: false,
    error: false
  }]);
  const [infoRepo, setInfoRepo] = useState();
  const [spinner, setSpinner] = useState(false);

  return (
    <ContextSearch.Provider 
      value={{searchUser, setSearchUser, infoUser, setInfoUser, infoRepo, setInfoRepo,
        spinner, setSpinner
      }}>
      {children}
    </ContextSearch.Provider>
  )
}

export default ProviderSearch
