//core functionality from React
import React, { Component } from 'react';

//CSS imports
import '../styles/About.css';

//image imports
import FatmeMustafa from '../images/FatmeMustafa.jpg';
import EvaAlHindy from '../images/EvaAlHindy.jpg';
import JennieBerggren from '../images/JennieBerggren.jpg';

class AboutComponent extends Component {

  render(){
    return (
      <div>
        <h1 className="aboutFEJ">Välkommen till ExpressRecept!</h1>
          <p className="subtitle fancy"><span>Här är vi</span></p>
          <p className="fancyText">Tre kvinnor födda under olika decennier i olika delar av världen! Vår bakgrund är helt olik varandras, uppvuxna i olika religoner, vi gillar olika sorters musik, mat och filmer. Trots alla dessa olikheter har vi ändå funnit varandra genom vårt brinnande intresse för att ge användaren en bra upplevelse när de besöker vår app.</p>
          <div className="copy">
            <p>ExpressRecept är en app som utvecklas med målsättningen att vara en enkel applikation som snabbt kan ge inspiration om vilken mat som ska lagas idag. Kanske sitter man på bussen hem från arbete och vet att man har kyckling hemma som ska tillagas men man vill testa någon ny kryddning eller sätt att tillaga kycklingen.
            Receptsamlingen är av denna anledning mestadels enkla vardagsrätter men du kan även hitta lite mer avancerade rätter, desserter och smoothies.
            Namnet expressRecept är en kombination av att det ska gå att hitta recept i expressfart och för att appen är framtagen med hjälp av ramverket Express.
            Vi som jobbar med denna app är tre kvinnor som studerar till Frontendutvecklare på EC-utveckling. Projektet ingår i sista kursen på andra terminen.</p>
          </div>
          <div className="imagesDiv">
            <div className="team">
              <img src={FatmeMustafa} alt="FatmeMustafa"/>
              <p>Fatme Mustafa</p>
              <p>fatme-fatoom8@hotmail.com</p>
            </div>
          <div className="team">
            <img src={JennieBerggren} alt="Jennie"/>
            <p>Jennie Berggren</p>
            <p>berggrenjennie@gmail.com</p>
          </div>
          <div className="team">
            <img src={EvaAlHindy} alt="EvaAlHindi"/>
            <p>Eva Al-Hindy</p>
            <p>evahindy@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutComponent;