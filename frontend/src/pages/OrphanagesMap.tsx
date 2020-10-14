import '../styles/pages/orphanage-map.css'
import 'leaflet/dist/leaflet.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

function OrphanagesMap() {
    return (
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="" />

                   <h2>Escolha um orfanato no mapa</h2>
                   <p>Muitas crianças estão esperando a sua visita :&#41;</p>
               </header>
               <footer>
                   <strong>Rio do Sul</strong>
                   <span>Santa Catarina</span>
               </footer>
           </aside>
           
                <Map center={[-26.1655212,-48.9908527]} zoom={16} style={{width:"100%", height: "100%"}}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                    {/* TileLayer utilizando mapbox gratuito -- Necessita colocar um token gerado dentro do site */}
                    {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer> */}
                </Map>

           <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
           </Link>
       </div>
    )
    
}

export default OrphanagesMap