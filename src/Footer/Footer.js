import React from "react";
import "./Footer.css";
import { useStateValue } from "../StateProvider";
import { Link } from 'react-router-dom';

function Footer({ id, title, image, textright, textrightsub, imageapple, imagegoogle, texthead, textlink}) {
  const [{ basket }, dispatch] = useStateValue();

   

  return (
    <div className="footer-ul">
    <div className="text-head">
      <div className="text-head-sub">Localiza tu tienda</div>
    <Link>
     <div className="text-sublink">Somos una familia de más de 130 tiendas, así que siempre tendrás una tienda Kiwoko allí donde estés. ¡Encuentra la más cercana!</div> 
     </Link>
    </div>    
     <div className="text-head">
        <div className="text-head-sub">Mi cuenta</div>
      <Link>
       <div className="text-sublink">Entrar en mi cuenta</div> 
      </Link>
      <Link>
       <div className="text-sublink">Seguir mi pedido</div> 
      </Link>
       
     </div>      
     <div className="text-head">
        <div className="text-head-sub">Guía</div>
      <Link>
       <div className="text-sublink">Info Envío</div> 
      </Link>
      <Link>
       <div className="text-sublink">Preguntas Frecuentes</div> 
      </Link>
      <Link>
       <div className="text-sublink">Privilegios en Compras</div> 
      </Link>
      <Link>
       <div className="text-sublink">Condiciones de Uso</div> 
      </Link>
      <Link>
       <div className="text-sublink">Venta de medicamentos</div> 
      </Link>
     </div>    
     <div className="text-head">
        <div className="text-head-sub">Ayuda</div>
      <Link>
       <div className="text-sublink">Contacto</div> 
       </Link>
       <Link>
       <div className="text-sublink">¿Estás en Portugal?</div> 
       </Link>
    </div>  
  </div>

  );
}

export default Footer;
