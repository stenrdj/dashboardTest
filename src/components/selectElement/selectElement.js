import React,{useContext} from 'react';
import   DashboardContext   from '../../contexts/dashboard';
import './selectElement.scss';

function SelectElement({data}) {
 	const [dashboardStore,setDashboardStore] = useContext(DashboardContext);

   return (
		<div className="select-element">
 			<div className="select-element_selected">{dashboardStore.selectedCampaign && dashboardStore.selectedCampaign.id ? dashboardStore.selectedCampaign.campaignName : "All Compaigns"}</div>
			<ul className="select-element_list">
				<li className="select-element_list-choice" onClick={()=>{ setDashboardStore({ selectedCampaign: [] });}}>All Compaigns</li>
				{Object.values(data).map((item,key)=> <li 
										className="select-element_list-choice" 
										key={key}
										onClick={()=>{setDashboardStore({ selectedCampaign: item });}}>
											{item.campaignName}
										</li>)}
			</ul>
		</div>
  );
}

export default SelectElement;
