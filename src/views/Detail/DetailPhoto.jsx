import React, { Component } from 'react';
import '../../css/index.css';
import Metadata from '../Metadata/Metadata';
import GoHome from '../GoHome/GoHome';


class DetailPhoto extends Component {

  render() {
    return (
      <div className="detail detail-photo">
      <GoHome></GoHome>
        <h3>Photos</h3>
        <div className="circle-title"></div>
        <div className="specs">
          <p><b>Kamera </b> Nikon D750</p>
          <p><b>Objektiv </b> Nikon AF S Nikkor 50mm 1:1.8</p>
        </div>
        <div className="imgs">
          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo/south-korea-19-3.jpg")} alt="one" />
            <Metadata shutter="1/400" aperture="1.8" iso="800" focal="50"></Metadata>
            <h4>Inhalt</h4>
            <p>
              Professor Hun Ho Oh mit seinem Team im KAIST-Entwicklungslabor für humanoide Roboter.
            </p>
            <h4>Kamera Einstellungen</h4>
            <p>
              In den meissten Fällen würde ich für ein Gruppenfoto eine eher geschlossene Blende wählen, damit
              alle Personen auch versetzt voneinander sich im Schärfebereich befinden. Da ich jedoch mit 
              einem 50mm Objektiv von recht weit weg fotografieren konnte, erübrigte sich dies und ich konnte 
              so im eher dunklen Raum alles aus der Blende holen und so ein schärferes Bild ermöglichen.
            </p>
            <h4>Komposition</h4>
            <p>
              Das Objekt (Die Personengruppe) soll als Einheit präsent im im Zentrum stehen, deshalb ist sie horizontal eingemittet.
              Vertikal soll das Objekt auf dem goldenen Schnitt gewichten.
            </p>
          </div>

          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo/south-korea-19-8.jpg")} alt="one" />
            <Metadata shutter="1/320" aperture="1.8" iso="800" focal="50"></Metadata>
            <h4>Inhalt</h4>
            <p>
              Jan-Marc Furer beim installieren eines Mikrofons bei Professor Hun Ho Oh.
            </p>
            <h4>Kamera Einstellungen</h4>
            <p>
              Um eine starke Tiefenwirkung zu erzeugen liess ich die Blende so weit offen wie möglich.
              Dies ermöglichte mir auch mit einer möglichst kurzen Belichtungszeit und tiefem ISO zu fotografieren.
            </p>
            <h4>Komposition</h4>
            <p>
              Aufnahme ist von unterhalb der Augenlinien um Wichtigkeit des Geschehens darzustellen. Auch soll es das Sitzen
              der einen Person und das gekrümmte stehen der anderen kompenzieren. Weiter wurde ein Versuch des "Framings" mit den 
              dunklen Stahlträgern gemacht um den Fokus noch stärker auf die beiden Peronen zu leiten.
            </p>
          </div>

          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo/south-korea-19-34.jpg")} alt="one" />
            <Metadata shutter="1/4000" aperture="1.8" iso="100" focal="50"></Metadata>
            <h4>Inhalt</h4>
            <p>
              Mann beim transportieren von Gütern in Ladenviertel Seouls.
            </p>
            <h4>Kamera Einstellungen</h4>
            <p>
              Da es sehr hell war zu dieser Zeit konnte ich die Verschlusszeit auf 1/4000 Sekunden setzen und konnte die Blende
              trotzdem gerade noch bei f/1.8 lassen ohne dass das Bild zu hell wurde. 
            </p>
            <h4>Komposition</h4>
            <p>
              Die Aufnahme im Hochformat ermöglichte die Abbildung der Häuser und dessen Schilder im Hintergrund.
              Dies stellt eine Verbindung mit dem Objekt und dem Hintergrund her. Der Mann ist inmitten des Geschehens und
              ist gezwungen in den engen und überladenen Gassen sich fortzubewegen.
            </p>
          </div>
        </div>
      </div>
    );
  };
}
export default DetailPhoto;