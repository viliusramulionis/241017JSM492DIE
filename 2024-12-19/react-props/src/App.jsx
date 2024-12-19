import Button from './components/button/Button'
import Card from './components/card/Card'
import List from './components/list/List';
import data from './data';
import './App.css'

function App() {
  // JSX sintaksėje atributai yra vadinami propsais (props)

  return (
    <>
      <div>
        <Button 
          text="Labas Pasauli" 
        />
        <Button 
          text="Paspausk Mane" 
        />
        <Button 
          text="Užvesk su pele ant manęs" 
        />
      </div>
      <div className="mt-5">
        <Card 
          pavadinimas="Seimo narys iš „Nemuno Aušros“ bankrutuoja"
          aprasymas="„Kol bankroto byla neiškelta, nenoriu apie tai kalbėti, kad nepažeisčiau kieno nors interesų“, – prieš rinkimus atsakė kandidatas „Labas, Plunge“ žurnalistei."
          nuotrauka="https://images.delfi.lt/media-api-image-cropper/v1/49a0c39a-97ad-43c3-b5c4-d93fe1a5c5b3.jpg?noup&w=384&h=216"
        />
        <Card 
          pavadinimas="Rusija bando naują taktiką prieš Lietuvą, taikiniais gali tapti žinomi žmonės"
          aprasymas="Jis atkreipia dėmesį, kad atremiant Rusijos teisinius išpuolius, Lietuvoje vis dar egzistuoja rizikos faktorius: kai kurie teisėjai ir prokurorai formaliai vertina priešiškų valstybių teismų sprendimus ir nesigilina į geopolitinių įvykių kontekstą."
          nuotrauka="https://images.delfi.lt/media-api-image-cropper/v1/414f64c4-41b3-4e44-ae13-aecd70a3f20f.jpg?noup&w=384&h=216"
        />
        <Card 
          pavadinimas="Rusija bando naują taktiką prieš Lietuvą, taikiniais gali tapti žinomi žmonės"
          aprasymas="Jis atkreipia dėmesį, kad atremiant Rusijos teisinius išpuolius, Lietuvoje vis dar egzistuoja rizikos faktorius: kai kurie teisėjai ir prokurorai formaliai vertina priešiškų valstybių teismų sprendimus ir nesigilina į geopolitinių įvykių kontekstą."
        />
      </div>
      <h2>Dinamiškai generuotos kortelės</h2>
      <div className="mt-5">
          {data.map((reiksme, indeksas) => 
            <Card 
              pavadinimas={reiksme.title} 
              aprasymas={reiksme.description}
              nuotrauka={reiksme.image}
              key={indeksas}
            />
          )}
      </div>

      <h2>Jeigu sąrašo elementi tušti:</h2>
      <List />

      <h2>Sąrašas:</h2>
      <List 
        items={["Labas", "Pasauli"]} 
      />
    </>
  )
}

export default App
