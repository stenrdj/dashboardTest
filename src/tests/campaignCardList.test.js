import React from 'react';
import CampaignCardList from '../components/campaignCard/campaignCardList';
import SelectElement from '../components/selectElement/selectElement';
import CampaignCardAdd from '../components/campaignCard/campaignCardAdd';
import DashboardContext from '../contexts/dashboard'
import App from '../App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => 'selectedCampaign',
  useEffect: (f) => f()
}));

test('Should render compaigns list', () => {
	   const elements = Enzyme.shallow(
        <DashboardContext.Provider value={{ selectedCampaign: [] }}>
            <CampaignCardList />
        </DashboardContext.Provider>
    ).dive();
      expect(elements.find(CampaignCardAdd).length).toBe(1);
});
test('Should render compaigns list based on filter', () => {
	 
	  const elements = Enzyme.shallow(
	  		<DashboardContext.Provider value={{ selectedCampaign: [] }}>
	  				<App/>
	  		</DashboardContext.Provider>).dive();
	  elements.children().find('.select-element_list-choice').at(1).simulate('click');
   });