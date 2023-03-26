export default function RenderingList_1() {
    const products = ["Laptop", "Mobile", "Tablet", "Camera", "Headphone", "Earphone", "Watch", "Shoes", "T-Shirt", "Pant", "Laptop"]
    const product = products.map((product) => (
        <h3 key={product}>{product}</h3>
    ))
    return (
        <div>
            <h3>In this method the error is removed that was present in the last method i.e. Mapping.</h3>
            {product}
            <h3>Now you can see that the error is removed. however, this method is not recommended because it can also generate error if the products list has the same item. The recommended method is the next method i.e. RenderingList_2.js</h3>
        </div>
    )
}