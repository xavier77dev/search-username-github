import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SearchUser from './SearchUserApp.jsx'
import ProviderSearch from './context/ProviderSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderSearch>
      <SearchUser />
    </ProviderSearch>
  </React.StrictMode>,
)
