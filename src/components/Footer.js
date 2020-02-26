import React from 'react';
import { Link } from 'gatsby';

import cblogo from '../img/cbInitialsLogo@1x.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import config from '../data/config';
//const config = require('./src/data/config');

const Footer = class extends React.Component {
	render() {
		return (
			<footer className='footer has-background-black has-text-white-ter'>
				<div className='content has-text-centered has-background-black has-text-black-ter'>
					<div className='container has-background-black has-text-white-ter'>
						<div className='columns'>
							<div className='column is-4'>
								<section className='menu'>
									<ul className='menu-list'>
										<li>
											<Link to='/' className='navbar-item'>
												Home
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/about'>
												About
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/apps'>
												Apps
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/portfolio'>
												Portfolio
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className='column is-4'>
								<section>
									<ul className='menu-list'>
										<li>
											<Link className='navbar-item' to='/blog'>
												Blog
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/contact'>
												Contact
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className='column is-4 social'>
								<a title='facebook' href={config.socialLinks.facebook}>
									<img
										src={facebook}
										alt='Facebook'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a title='twitter' href={config.socialLinks.twitter}>
									<img
										className='fas fa-lg'
										src={twitter}
										alt='Twitter'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a title='instagram' href={config.socialLinks.instagram}>
									<img
										src={instagram}
										alt='Instagram'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a title='vimeo' href={config.socialLinks.vimeo}>
									<img
										src={vimeo}
										alt='Vimeo'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;