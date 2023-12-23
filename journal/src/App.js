import React from "react"
import Card from "./comp/card"
import Banner from "./comp/banner"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
      return (
          <Card 
            key={item.id}
            item={item}
          />
    )})
    return (
    <div className="App">
      <Banner />
      <section>
        {cards}
      </section>
    </div>
  );
}


