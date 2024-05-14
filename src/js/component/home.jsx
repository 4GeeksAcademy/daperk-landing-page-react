import React from "react";

import Navbar from "./navbar"
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-center my-5 text-center">
				<Card title="Miami" text="Enjoy beautiful beaches, vibrant nightlife, and a mix of cultures in Miami." image="https://images.pexels.com/photos/4366062/pexels-photo-4366062.jpeg"/> 
				<Card title="Orlando" text="Experience the magic of Walt Disney World, Universal Studios, and more in Orlando." image="https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg"/>
				<Card title="St. Augustine" text="Explore Tampa’s waterfront, historical sites, and attractions like Busch Gardens." image="https://images.pexels.com/photos/20140235/pexels-photo-20140235/free-photo-of-castillo-de-san-marcos-national-monument.jpeg"/>
				<Card title="Key west" text="Discover the charm of St. Augustine, the oldest city in the U.S., with its historic landmarks." image="https://images.pexels.com/photos/12902831/pexels-photo-12902831.jpeg"/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
