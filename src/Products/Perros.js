import React from "react";
import "./Perros.css";
import Product from "../Product";
import BrandIcon from "../BrandIcon"; 
import DogProducts from "./DogProducts";

function Perros() {
  return (
    <div className="Perros">
      <div className="perros__container">

      <div className="home__row">
          <DogProducts
            id="20"
            minititlepr="DOGZZZ"
            subtitle="Cojin Dogzzz Sheeps Cushion"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwbc2f9644/images/accesorio_perro_dogzzz_sheeps_cushion_DGZ88487_M.jpg?sw=385&sh=385"
            price={9.95}
            ratingpr={4}
          />
          <DogProducts
            id="21"
            minititlepr="CATSHION"
            subtitle="Rascador Catshion Basic"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw53559e56/images/accesorios_gatos_catshion_basic_house_gris_CSH70161_M.jpg?sw=385&sh=385"
            price={9.95}
            ratingpr={4}
          />
          <DogProducts
            id="22"
            minititlepr="KIWOKO"
            subtitle="Acuario Kiwoko Start 30 para peces de agua fria"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwaf47f951/images/acuarios_peces_kiwoko_start_30_agua_fria_10L_01_KWK531_M.jpg?sw=385&sh=385"
            price={22.99}
            ratingpr={4}
          />
             
         </div>
      </div>
    </div>
  );
}

export default Perros;


 