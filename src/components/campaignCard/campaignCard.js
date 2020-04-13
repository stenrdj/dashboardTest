import React,{useState} from 'react';
import TooltipSelect from '../tooltipSelect/tooltipSelect';
import './campaignCard.scss';

function CampaignCard({data}) {
    const [showTooltip, setshowTooltip] = useState(false);

    return (
        <div className="campaign-item">
            <div className="campaign-item_container">
                
                <div className="campaign-item_picture">
                    <div className="campaign-item_tooltip">
                        <i className="tooltip-button icon-edit" onClick={(e)=> setshowTooltip(!showTooltip)}></i>
                        {showTooltip && <TooltipSelect/>}
                    </div>
                    <img src={data.primaryMediaUrl} alt="Compaign "/>
                </div>
                <div className="campaign-item_content">
                    <h3 className="campaign-item_title">
                    {data.cardTitle}
                    </h3>
                    <div className={"campaign-item_budget "+(data.currentWorkflow === 'saved' ? ' budget_isSaved' : ' budget_isActive')}>
                        <div className="budget_value">
                            $ {data.listOfPlans[0].price.amount} / Month
                        </div>
                        <div className="budget_status">
                            {data.currentWorkflow}
                        </div>
                        <div className="budget_bar">
                        </div>
                    </div>
                </div>
                <div className="campaign-item_footer">
                    <ul className="campaign_stats">
                        <li className="campaign_stats_item icon-database">$15,000</li>
                        <li className="campaign_stats_item icon-users">500</li>
                        <li className="campaign_stats_item icon-eye">150 K</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default CampaignCard;