import React from 'react';
import './tooltipSelect.scss';

function TooltipSelect() {
    return (
		<div className="select-tooltip">
			<ul className="select-tooltip_list">
				<li className="select-tooltip_list-choice icon-edit icon-20">Edit</li>
				<li className="select-tooltip_list-choice icon-valid icon-20">Publish</li>
			</ul>
		</div>
    );
}

export default TooltipSelect;