import React from 'react'
import { Navbar } from '../components'
import PricingPackage from '../components/services/PricingPackage'
import "../App.css"
import ServicesCard from '../components/services/ServicesCard'
import { Footer } from '../containers'
import Contact from '../containers/contactForm/Contact'


const Services = () => {
  return (
    <div className='services'>
        <Navbar />
        <main className='servicesMain'>
            <h1>What we do?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus.</p>
        </main>
        <section className="container servicesCard">
            <div className="lighterCard">
                <ServicesCard
                    title={"Lorem ipsum"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}
                />
            </div>
            <div className="darkerCard">
                <ServicesCard
                    title={"Lorem ipsum"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci."}
                />
            </div>
            <div className="mainCard">
                <ServicesCard
                    title={"Lorem ipsum"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed."}
                    
            />
            </div>
            <div className="darkerCard">
                <ServicesCard
                    title={"Lorem ipsum"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci."}

                />
            </div>
            <div className="lighterCard">
                <ServicesCard
                    title={"Lorem ipsum"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}
                />
            </div>
        </section>
        <section className='container servicesPricing'>
            <div className='servicePricing-Content'>
                <h1>Pricing Models For Every Need</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et leo condimentum, mollis velit interdum, congue quam. </p>
            </div>
            <div className='pricingPackage'>
                <PricingPackage 
                    tipi={"Basic"}
                    price={"$120"}
                    categoriesFirst={"Web Development"}
                    categoriesSecond={"Software Development"}
                    categoriesThird={"Cyber Securiy"}
                    categoriesFourth={"Mobile-Apps"}
                />
            </div>
            <div className='pricingPackage'>
                <PricingPackage 
                    tipi={"Pro"}
                    price={"$320"}
                    categoriesFirst={"Web Development"}
                    categoriesSecond={"Software Development"}
                    categoriesThird={"Cyber Securiy"}
                    categoriesFourth={"Mobile-Apps"}
                />
            </div>
        </section>
        <Contact />
        <Footer />
    </div>
  )
}

export default Services