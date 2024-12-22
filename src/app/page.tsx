/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Brand from "./brand";
import Ceramics from "./ceramics";
import Product from "./components/product";
import Benefit from "./benefit";
import Touch from "./components/touch";
import ProductListing from "./components/ProductListing";


export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
   

   </>
  );
}