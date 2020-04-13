import React,{useState} from 'react';
import Header from './components/header/header'
import DashboardContext from './contexts/dashboard'
import CampaignCardList from './components/campaignCard/campaignCardList'

import './App.scss';

function App() {
	  const [context, setContext] = useState({ selectedCampaign: {} });
   return (
  	<DashboardContext.Provider  value={[context, setContext]}>
	    <div className="dashboard-container">
	    	<Header />
	    	<div className="page-content page-fixedwidth">
	    		<CampaignCardList />
 	    	</div>
	    </div>
    </DashboardContext.Provider>
  );
}

export default App;
