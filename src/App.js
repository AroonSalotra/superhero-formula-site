
import PageTwo from './PageTwo';
import Navbar from './Navbar';
import ViewProducts from './ViewProducts';
import Featured from './Featured';
import Products1 from './Products-1';
import Products2 from './Products-2';
import CompanyBanner from './CompanyBanner';
import Support from './Support';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


const App = () => {

  const [index, setIndex] = useState(0)

  const IMAGES = [
    <img src="https://images.pexels.com/photos/2280165/pexels-photo-2280165.jpeg?cs=srgb&dl=pexels-carl-newton-2280165.jpg&fm=jpg"
      alt="Speed" />,
    <img src="https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-999309.jpg&fm=jpg"
      alt="Muscle" />,
    <img src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Brain" />,
    <img src="https://images.unsplash.com/photo-1619123707367-bb6647e1a720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt="Aim" />,
    <img src="https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt="Firestarter" />,
    <img src="https://images.unsplash.com/photo-1635166304271-04931640a450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      alt="Featured" />,
    <img src="https://images.pexels.com/photos/2091316/pexels-photo-2091316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Plane" />,
  ]

  const PRODUCTS = [
    // { title: "Featured Products", text: "Browse our wide range", imgUrl: IMAGES[0], classType: "spanTwo", index: 0 },
    { title: "Super-Speed v4", text: "No car? no problem!", imgUrl: IMAGES[0], index: 0 },
    { title: "Fibre-Grower Alpha 1", text: "", imgUrl: IMAGES[1], index: 1 },
    { title: "Bob's Brain Capacity", text: "", imgUrl: IMAGES[2], index: 2 },
    { title: "Haptic Reflexors", text: "", imgUrl: IMAGES[3], index: 3 },
    { title: "Firestarter", text: "", imgUrl: IMAGES[4], classType: "spanTwo", index: 4 },
  ]



  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Featured />
          <Products1 setIndex={setIndex} PRODUCTS={PRODUCTS} IMAGES={IMAGES} />
          <Products2 />
          <CompanyBanner />
          {/* <Support/> */}
          <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/two">
          <PageTwo />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/products">
          <ViewProducts index={index} PRODUCTS={PRODUCTS} IMAGES={IMAGES} />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
