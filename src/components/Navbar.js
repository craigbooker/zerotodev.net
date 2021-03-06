import React from 'react';
import { Link } from 'gatsby';
import craigAvatar from '../../static/img/craig-booker.jpg';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ''
		};
	}

	// Only close nav if it is open
	handleLinkClick = () => this.state.active;

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
					  })
					: this.setState({
							navBarActiveClass: ''
					  });
			}
		);
	};

	render() {
		return (
			<nav className='navbar' role='navigation' aria-label='main-navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<Link to='/' className='navbar-item' title='Logo'>
							<img src={craigAvatar} alt='Craig Booker' />
						</Link>
						<Link
							to='/'
							onClick={this.handleLinkClick}
							className='navbar-item'
							title='LogoText'
						>
							<strong className='navbar-item'>ZeroToDev</strong>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id='navMenu'
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className='navbar-end has-text-centered'>
							<Link className='navbar-item' to='/'>
								Start Here
							</Link>
							<Link className='navbar-item' to='/about'>
								About
							</Link>
							<Link className='navbar-item' to='/blog'>
								Blog
							</Link>
							<Link className='navbar-item' to='/contact'>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
