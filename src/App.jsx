import React from 'react'

import Navbar from './Components/navbar'
import Card from './Components/card'
import Footer from './Components/footer'
import backgroundImage from './assets/Untitled.jpg';

import fdSalsA from './assets/salsa.jpg'
import RiceSpice from './assets/riceandspice.jpg'
import Summer1 from './assets/summer1.jpg'
import korean2 from './assets/korean2.jpg'
import Fries from './assets/fries.jpg'
import drum from './assets/drum.jpg'
import strip from './assets/stripzilla.jpeg'
import pasta from './assets/pasta.jpg'
import fish from './assets/fishandbaik.jpg'



const App = () => {
  return (
    <div className="app-container">
      <Navbar />
    
      <div className='body-container' >
        {foodproducts.map(item => (
          <Card 
            key={item.id}
            image={item.image}
            product={item.product}
            desc={item.desc}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App

const foodproducts = [
  {
    id : 1,
    image : fdSalsA ,
    product : "SIZZLING SALSA WINGS 8 pcs" ,
    desc : "8 Pcs. Spices to perfection, dusted with our special sizzling salsa seasoning. ",
    

  },

  {
    id : 2,
    image : RiceSpice,
    product : "Rice N Spice" ,
    desc : "Savory spiced rice infused with buttery richness, perfectly paired with crispy Hot Shots, all crowned with our signature Vietnamese sauce a harmonious blend of bold, tangy, and irresistible flavors. ",
    

  },

  {
    id : 3,
    image : Summer1  ,
    product : "SUMMER DEAL 1" ,
    desc : "Chick N Crunch, Crispy Chicken Pc & Regular Drink [Can/345ml Drink] (Selecting Chicken part is not Applicable on promotion Set)  ",
    

  },

  {
    id : 4,
    image : korean2 ,
    product : "ORIGINAL KOREAN DEAL 2" ,
    desc : "Original Korean Burger x 2QTY Original Korean Chicky Bites 9Pc Original Korean Hot Wings 4 pcs Original Korean Spicy Ramen Noodles Original Korean Extreme Spicy Ramen Noodles 1.5 liter drink ",
    

  },

  {
    id : 5,
    image : Fries ,
    product : "Crunchy Cheesey Overloaded Fries" ,
    desc : "A mountain of crispy fries loaded with crunchy chicken bites, smothered in creamy cheese sauce and finished with a hint of bold spices. Topped off with extra crunchy finger chips for the ultimate overloaded cheesy crunch experience. ",
    

  },

  {
    id : 6,
    image : drum ,
    product : "9 Pc Drumsticks Bucket" ,
    desc : "9 crispy succulent fried drumsticks for just Rs. 1550. Something you wouldn't want to miss!  ",
    

  },

  {
    id : 7,
    image : strip ,
    product : "3 Pc StripZilla + 1.5 Ltr Drink " ,
    desc : "Crispy burgers with 1.5 litre drink. ",
    

  },

  {
    id : 8,
    image : pasta ,
    product : "Crunchy Chicken Pasta" ,
    desc : "Indulge in a rich, creamy Alfredo sauce, generously adorned with crispy chunks of chicken and a delightful sprinkle of crunchy bits for the perfect finishing touch. This dish promises a satisfying blend of flavors and textures that make every bite a delight! ",
    

  },

  {
    id : 9,
    image : fish ,
    product : "Fish & Chips With Al Baik Sauce 2pc" ,
    desc : "A delectable duo of crispy, golden-fried fish, perfectly paired with a generous portion of seasoned fries, complemented by Kababjees' signature garlic Al Baik sauce for an irresistibly flavorful finish. ",
    

  },
]