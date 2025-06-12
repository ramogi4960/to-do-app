export default function NewItem() {
    return (
        <form className="new-item" method="post" action="http://localhost:5100/additem">
            <input type="text" name="data" placeholder="Add new item..." />
            <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            <button><i className="fa-solid fa-rotate-right"></i></button>
        </form>
    )
}