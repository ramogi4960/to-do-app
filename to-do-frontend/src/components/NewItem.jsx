export default function NewItem() {
    return (
        <form className="new-item">
            <input type="text" placeholder="Add new item..." />
            <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            <button><i class="fa-solid fa-rotate-right"></i></button>
        </form>
    )
}