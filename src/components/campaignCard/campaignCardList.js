import React,{useState,useContext,Fragment,useEffect} from 'react';
import CampaignCard from '../campaignCard/campaignCard'
import CampaignCardAdd from '../campaignCard/campaignCardAdd'
import DashboardContext   from '../../contexts/dashboard';

import './campaignCard.scss';

function CampaignCardList() {
    const [listCards, setlistCards] = useState({});
    const [cards, setCards] = useState({});
    const [dashboardStore] = useContext(DashboardContext);
    
    useEffect(() => {
        fetch("http://127.0.0.1/api/cards")
          .then(res => res.json())
          .then(
            (result) => {
              setlistCards(result);
              setCards(result);
             },
            (error) => {
            }
          )
      }, []);

    useEffect(() => {
         if(Object.prototype.hasOwnProperty.call(dashboardStore, 'selectedCampaign') &&  dashboardStore.selectedCampaign.id){
             setlistCards(cards.filter((data)=>data.campaignId === dashboardStore.selectedCampaign.id))
         }else{
             setlistCards(cards);
         }
      }, [dashboardStore,cards]);

    return (
        <Fragment>
           {Object.values(listCards).map((item,key)=> (
               <CampaignCard data={item} key={key}/>
               ))} 
            <CampaignCardAdd />    
        </Fragment>
        
    );
}

export default CampaignCardList;