export default function RenderingArray() {
    const Fruits = ["Apple", "Mango", "Banana", "Papaya"];
    const Fruitslist = Fruits.map((Fruit, index) => <h2 key={index}>{Fruit}</h2> 
    )
        return <div>
            <h1>The available fruits are.</h1>
            {Fruitslist}
        </div>
}