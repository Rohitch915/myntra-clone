import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
    let dispatch = useDispatch();
    let addItem = () => {
        dispatch(bagActions.addItemInBag(item.id))
    }
    let deleteItem = () => {
        dispatch(bagActions.deleteItemInBag(item.id))
    }


    let bag = useSelector(store => store.bag);
    let element = bag.indexOf(item.id) >= 0;


    return (
        <main>
            <div className="items-container">
                <div className="item-container">
                    <img className="item-image" src={item.image} alt="item image" />
                    <div className="rating">
                        {item.rating.stars} ⭐ | {item.rating.count}
                    </div>
                    <div className="company-name">{item.company}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price">
                        <span className="current-price">Rs {item.current_price}</span>
                        <span className="original-price">Rs {item.original_price}</span>
                        <span className="discount">({item.discount_percentage}% OFF)</span>
                    </div>

                    {element ?
                        <button type="button" className="btn btn-add-bag btn-danger" onClick={() => deleteItem()}>
                            <MdDelete/> Remove from Bag</button> :
                        <button type="button" className="btn btn-add-bag btn-success" onClick={() => addItem()}>
                            <MdAddCircleOutline/> Add to Bag</button>
                    }
                </div>
            </div>
        </main>
    )
}


export default HomeItem;