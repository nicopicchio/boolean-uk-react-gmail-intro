import avatar from './assets/icons/batman.png';
import backArrow from './assets/icons/back-arrow.png';
import dropdown from './assets/icons/dropdown-arrow.png';
import expandIcon from './assets/icons/expand-icon.png';

import './styles/write-email.css';

function WriteEmail() {
	return (
		<div className="write-email">
			<img className="avatar" src={avatar} alt="avatar" width="60px" />
			<div className="email-body-box">
				<div className="top">
					<div className="top-left">
						<img className="backArrow" src={backArrow} width="20px" />
						<img src={dropdown} alt="dropdown arrow" width="10px" />
						<p className="email-address">
							Freepik Company (no-reply@freepik.com)
						</p>
					</div>
					<div className="top-right">
						<img className="expand" src={expandIcon} width="20px" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WriteEmail;
