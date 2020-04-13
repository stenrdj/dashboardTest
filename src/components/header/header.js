import React ,{useEffect,useState} from 'react';
import SelectElement from '../selectElement/selectElement'
import './header.scss';

function Header() {
	const [items, setItems] = useState([]);
	
	useEffect(() => {
	    fetch("http://127.0.0.1/api/campaigns")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          setItems(result);
	        },
	        (error) => {
	        }
	      )
	  }, [])
  return (
   <div className="header-bar">
    		<div className="header-bar_content page-fixedwidth">
    			<SelectElement data={items} />
	    	</div>
    	</div>
  );
}

export default Header;
