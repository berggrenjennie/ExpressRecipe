//core functionality from React
import React, { Component } from 'react';

//CSS imports
import '../styles/About.css';
import FatmeMustafa from '../images/FatmeMustafa.jpg';
import EvaAlHindy from '../images/EvaAlHindy.jpg';
class AboutComponent extends Component {

  render(){
    return (
      <div>
          <h1 className="aboutFEJ">Välkommen till ExpressRecept!</h1>
          <p className="subtitle fancy"><span>Här är vi</span></p>
          <div className="copy"><p>ExpressRecept är en app som utvecklas med målsättningen att vara en enkel applikation som snabbt kan ge inspiration om vilken mat som ska lagas idag. Kanske sitter man på bussen hem från arbete och vet att man har kyckling hemma som ska tillagas men man vill testa någon ny kryddning eller sätt att tillaga kycklingen.
          Receptsamlingen är av denna anledning mestadels enkla vardagsrätter men du kan även hitta lite mer avancerade rätter, desserter och smoothies.
          Namnet expressRecept är en kombination av att det ska gå att hitta recept i expressfart och för att appen är framtagen med hjälp av ramverket Express.
          Vi som jobbar med denna app är tre kvinnor som studerar till Frontendutvecklare på EC-utveckling. Projektet ingår i sista kursen på andra terminen.</p>
          </div>
          <div className="imagesDiv">
            <img src={FatmeMustafa} alt="FatmeMustafa"/>
            <img src="https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/1486144545/013117-InStyle-MAR2017-FLR-super-style-1.jpg?itok=mZi-frJ1" alt="Jennie"/>
            <img src={EvaAlHindy} alt="EvaAlHindi"/>
          </div>
      </div>
    );
  }
}
export default AboutComponent;
