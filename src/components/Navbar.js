import React from 'react'

export default function Navbar() {
  return (
    <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
							<a href = "index.html"><img src = "images/logo.svg" /></a>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav">
							<ul>
								<li><a href = "index.html">Home</a></li>
								<li><a href = "portfolio.html">Portfolio</a></li>
								<li><a href = "contact.html">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
