import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import './styles/email-body-actions.css'

function SectionEmailBody() {
	return (
		<section className="email-body">
			<div className="content">
				<img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
			</div>
		</section>
	);
}

export default SectionEmailBody;
