import React from "react";
import "./Home.css";
import Product from "./Product";
import BrandIcon from "./BrandIcon"; 
import BrandProduct from "./Brand/BrandProduct";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwca52ef61/images/homepage/2020/noviembre/main_banner/es_main_15descuento.jpg"
          alt=""
        />
        
        <p className="title-1-home">¡Aprovecha estos Descuentazos black friday! 🐾</p>

        <div className="home__row">
          <Product
            id="1"
            title="Super descuentos en el pienso preferido de tu peludo. Corre!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw85ef7fec/images/homepage/2020/blackfriday/mini_banner/es_minir_bf_pienso_perro.jpg"
          />
           <Product
            id="2"
            title="Su peinso davorito, ahora con descuentos. No te lo pierdes!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwff3f3d94/images/homepage/2020/blackfriday/mini_banner/es_minir_bf_pienso_gato.jpg"
          />
           <Product
            id="3"
            title="Super ofertas en los accesorios favoritos de tu mascota. Le encantan!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwfaff1cf4/images/homepage/2020/blackfriday/mini_banner/es_minir_bf_acc_todos.jpg"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="Grandes ofertas en grandes marcas. Sorprendele con sus productos favoritos!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw4ae2d7a0/images/homepage/2020/blackfriday/mini_banner/es_minic_bf_humedo.jpg"
          />
           <Product
            id="5"
            title="Llevate mas y paga menos! Los mejores snacks para tu amigo."
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw2cd84116/images/homepage/2020/blackfriday/mini_banner/es_minic_bf_snacks.jpg"
          />
           <Product
            id="6"
            title="Cuidar a tu peludo es mas facil con estas ofertas. Te lo vas a perder?"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw358d73fc/images/homepage/2020/blackfriday/mini_banner/es_minic_bf_arenas.jpg"
          />
          <Product
            id="7"
            title="Todos los productos para tu mascota a precios increibles!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw892d7890/images/homepage/2020/blackfriday/mini_banner/es_minic_bf_peques.jpg"
          />
        </div>
        
         <div className="decounts-div-1"> 
          <p className="decounts-div-2">DESCUBRE MAS DECUENTOS</p>
         </div>

         <p className="title-1-home">Descuentos Black Friday en las mejores marcas</p>
      
         <div className="home-row-brand">
          <BrandIcon
            id="4"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw158cff2a/images/homepage/2020/bolitas2/BT_logo_true_origins.jpg"
          />
           <BrandIcon
            id="5"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw4a1a1fb3/images/homepage/2020/bolitas2/BT_logo_royal_canin.jpg"
          />
           <BrandIcon
            id="6"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw9e72e2cd/images/homepage/2020/bolitas2/BT_logo_advance.jpg"
          />
          <BrandIcon
            id="7"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwb329b6fb/images/homepage/2020/bolitas2/BT_logo_acana.jpg"
          />
          <BrandIcon
            id="8"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw879ec29b/images/homepage/2020/bolitas2/BT_logo_wellness_core.jpg"
          />
          <BrandIcon
            id="9"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwffbd82b2/images/homepage/2020/bolitas2/BT_logo_felix.jpg"
          />
          <BrandIcon
            id="10"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw40dc6a8c/images/homepage/2020/bolitas2/BT_logo_applaws.jpg"
          />
          <BrandIcon
            id="11"
            imagebra="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwae3a0269/images/homepage/2020/bolitas2/BT_logo_nath.jpg"
          />
        </div>
         
        <div className="home__row">
          <Product
            id="12"
            title="Hora de educar!"
            subtitle="Encuentra aqui todo lo que necessitas para adiestrar a tu cachorro"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwbaea9de5/images/homepage/2020/noviembre/mini_banner/cat_adaptil_home.jpg"
          />
           <Product
            id="13"
            title="Las mejores camitas"
            subtitle=" Cunas, colchones, colchonetas... El mejor descanso para tu mejor amigo!"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw2bcb0bd8/images/homepage/2020/octubre/mini_banner/mini_cat_camas_perro.jpg"
          />
           <Product
            id="14"
            title="Rascadores para gatos exigentes"
            subtitle="Cada gato, tiene su rascador...y aqui tienes todas las ofertas."
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw1f5378bf/images/homepage/2020/octubre/mini_banner/mini_cat_rascador.jpg"
          />
          <Product
            id="15"
            title="El acuario que buscabas"
            subtitle="Encuentra aqui el acuario perfecto que estabas buscando"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwfaff1cf4/images/homepage/2020/blackfriday/mini_banner/es_minir_bf_acc_todos.jpg"
          />
          
        </div>
         
        <p className="title-1-home">Descuentos Black Friday en las mejores marcas</p>

        <div className="home__row">
          <BrandProduct
            id="16"
            minititlepr="ROYAL CANINA"
            subtitle="Pienso para perros Royal Canin Maxi"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw0cb29137/images/pienso_perros_royal_canin_maxi_adult_4195_M.jpg?sw=385&sh=385"
            price={49.99}
            ratingpr={4}
          />
          <BrandProduct
            id="17"
            minititlepr="Catzilla"
            subtitle="Catzilla Feline Adult Sterilised"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwfe8907d1/images/comida_gatos_catzilla_feline_adult_sterilised_CTZ2217_M.jpg?sw=385&sh=385"
            price={29.95}
            ratingpr={3}
          />
          <BrandProduct
            id="18"
            minititlepr="Advance"
            subtitle="Affinity Advance Mini Adult pollo y arroz"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw34169d9d/images/pienso_perros_affinity_advance_adult_mini_7,5kg_ADV502110_M.jpg?sw=385&sh=385"
            price={25.99}
            ratingpr={2}
          />
          <BrandProduct
            id="19"
            minititlepr="FELIX"
            subtitle="Felix Fantastic Multipack Festín del Mar"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw0cb29137/images/pienso_perros_royal_canin_maxi_adult_4195_M.jpg?sw=385&sh=385"
            price={4.50}
            ratingpr={4}
          />
        </div>

        <img className="img-envio" src="../img/envio-pr.png" />

        
        <div className="home__row">
          <BrandProduct
            id="20"
            minititlepr="DOGZZZ"
            subtitle="Cojin Dogzzz Sheeps Cushion"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwbc2f9644/images/accesorio_perro_dogzzz_sheeps_cushion_DGZ88487_M.jpg?sw=385&sh=385"
            price={9.95}
            ratingpr={4}
          />
          <BrandProduct
            id="21"
            minititlepr="CATSHION"
            subtitle="Rascador Catshion Basic"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw53559e56/images/accesorios_gatos_catshion_basic_house_gris_CSH70161_M.jpg?sw=385&sh=385"
            price={9.95}
            ratingpr={4}
          />
          <BrandProduct
            id="22"
            minititlepr="KIWOKO"
            subtitle="Acuario Kiwoko Start 30 para peces de agua fria"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwaf47f951/images/acuarios_peces_kiwoko_start_30_agua_fria_10L_01_KWK531_M.jpg?sw=385&sh=385"
            price={22.99}
            ratingpr={4}
          />
          <BrandProduct
            id="23"
            minititlepr="KIWOKO START"
            subtitle="jaula kiwoko Pradera - Verde"
            image="https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw3bdb2182/images/accesorios_roedores_kiwoko_jaula_pradera_KWK934KP_M.jpg?sw=385&sh=385"
            price={4.50}
            ratingpr={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="24"
            title="¿Cuándo puedo sacar a mi cachorro a pasear?"
            subtitle="Antes de sacar a tu cachorro a la calle debes de leer nuestro post. Las primeras salidas a la calle es muy "
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dwbaea9de5/images/homepage/2020/noviembre/mini_banner/cat_adaptil_home.jpg"
          />
           <Product
            id="25"
            title="Participa en nuestro concurso "
            subtitle=" Síguenos en nuestras RRSS y cuéntanos ese gran susto que te dio tu mascota aquel día. Puedes ganar un vale"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw2bcb0bd8/images/homepage/2020/octubre/mini_banner/mini_cat_camas_perro.jpg"
          />
           <Product
            id="26"
            title="Rascadores para gatos exigentes"
            subtitle="Guía de alimentación para perros con problemas articulares"
            image="https://www.kiwoko.com/on/demandware.static/-/Library-Sites-KiwokoSharedLibrary/default/dw1f5378bf/images/homepage/2020/octubre/mini_banner/mini_cat_rascador.jpg"
          />
        
        </div>

      </div>
    </div>
  );
}

export default Home;
