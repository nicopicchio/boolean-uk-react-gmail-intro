import MainNav from './main-nav';
import SectionEmailBody from './section-email-body';
import SectionEmailActions from './section-email.actions';
import MainHeader from './main-header';
import EmailTitle from './email-title';
import WriteEmail from './write-email.jsx'

function Main() {
	return (
		<main className="email-view">
			<MainNav />
			<article className="email-content">
				<EmailTitle />
				<MainHeader />
				<SectionEmailBody />
				<SectionEmailActions />
				<WriteEmail />
			</article>
		</main>
	);
}

export default Main;
