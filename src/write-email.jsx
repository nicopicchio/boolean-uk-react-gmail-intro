import avatarImg from './assets/icons/batman.png';
import backArrowImg from './assets/icons/back-arrow.png';
import dropdownImg from './assets/icons/dropdown-arrow.png';
import expandIconImg from './assets/icons/expand-icon.png';
import letterImg from './assets/icons/letter-case.png';
import clipImg from './assets/icons/clip.png';
import linkImg from './assets/icons/link.png';
import emojiImg from './assets/icons/emoji.png';
import triangleImg from './assets/icons/triangle.png';
import pictureImg from './assets/icons/picture.png';
import lockImg from './assets/icons/lock.png';
import pencilImg from './assets/icons/pencil.png';
import rubbishImg from './assets/icons/rubbish-bin-delete-button.png';
import menuDotsVerticalImg from './assets/icons/menu-dots-vertical.png';

import './styles/write-email.css';

function WriteEmail() {
	return (
		<div className="write-email">
			<img className="avatar" src={avatarImg} alt="avatar" width="60px" />
			<div className="email-body-box">
				<div className="top">
					<div className="top-left">
						<img className="backArrow" src={backArrowImg} width="20px" />
						<img src={dropdownImg} alt="dropdown arrow" width="10px" />
						<p className="email-address">
							Freepik Company (no-reply@freepik.com)
						</p>
					</div>
					<div className="top-right">
						<img className="expand" src={expandIconImg} width="20px" />
					</div>
					<div className="bottom">
						<div className="bottom-left">
							<img src={letterImg} alt="letter" width="20px" />
							<img src={clipImg} alt="clip" width="20px" />
							<img src={linkImg} alt="link" width="20px" />
							<img src={emojiImg} alt="emoji" width="20px" />
							<img src={triangleImg} alt="tringle" width="20px" />
							<img src={pictureImg} alt="picture" width="20px" />
							<img src={lockImg} alt="lock" width="20px" />
							<img src={pencilImg} alt="pencil" width="20px" />
						</div>
						<div className="bottom-right">
							<img src={menuDotsVerticalImg} alt="menu item" width="20px" />
							<img src={rubbishImg} alt="rubbish" width="20px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WriteEmail;
