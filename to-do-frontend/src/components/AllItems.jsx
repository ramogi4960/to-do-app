export default function AllItems({ items }) {
    return (
        <div className="all-items">
            {items.map((value, index) => {
                return <div key={index} className="item">
                            <p>{value.data}</p>
                            <button><i className="fa-solid fa-pen-to-square"></i></button>
                            <button><i className="fa-solid fa-trash"></i></button>
                        </div>
            })}
        </div>
    )
}