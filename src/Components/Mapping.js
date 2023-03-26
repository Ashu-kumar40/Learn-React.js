const Prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const Price = Prices.map((Price) => <h3>{Price}</h3>);
const Discount = Prices.map((Price) => <h3>{(Price * 25) / 100}</h3>);
export default function Mapping() {
    return (
        <div>
            <h1>Price List</h1>
            {Price}
            <h1>25% Discount List</h1>
            {Discount}
        </div>
    )
}
