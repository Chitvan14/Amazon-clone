import React from "react";
import "./Home.css";
import Product from "./Product";
// import { useStateValue } from "./StateProvider";

function Home() {



 
    return (
        <div className="home">

  <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
 
            

            {/* products  */}
            {/* product id,title,price,rating,image  */}
            <div className="home__row">
          <Product
            id="12321341"
            title="Bajaj ATX 4 750-Watt Pop-up Toaster (White)"
            price={1199.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61B3cxLcvcL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
            price={40999.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Clarzo Men's Banarasi Silk Regular Fit Kurta Chudidar Pajama Set with Waistcoat (Navy Blue & Red)"
            price={1579.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31OILpf2GJL.jpg"
          />
          <Product
            id="23445930"
            title="Fab Attire Women Kurta Printed Pink Rayon Kurti"
            price={349.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91591rrpTaL._UL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={89900.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
            price={154999.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg"
          />


        </div>
        <div className="home__row">
          <Product
            id="123213410"
            title="Ikigai: The Japanese secret to a long and happy life"
            price={308.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
          />
          <Product
            id="495380940"
            title="Inalsa Stand Mixer Kratos-1000W with 5L SS Bowl| Includes Whisking Cone, Mixing Beater & Dough Hook, (Champagne)"
            price={8995.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61oscgd0KXL._SL1200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49038500"
            title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
            price={45900.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"
          />
          <Product
            id="234459300"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
            price={ 3449.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
          />
          <Product
            id="32543543450"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
            price={29990.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908293320"
            title="IK Multimedia IK Multimedia iRig Pro Duo Studio Suite complete recording bundle for iPhone, iPad & Mac/PC, interface"
            price={35910.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61GtzUpl1dL._SL1000_.jpg"
          />
        </div>

        </div>
    )
}

export default Home
