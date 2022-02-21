import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card item= {item}/>
        )
    })
    return (
        <>
            <nav>
                <h1 className="title">My Travel Journal</h1>
            </nav>
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}