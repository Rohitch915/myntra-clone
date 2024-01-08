import { useSelector } from "react-redux"
import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"

const Bag = () => {

    const bagItems=useSelector(store=>store.bag);
    const items=useSelector(store=>store.items)
    const curItems=items.filter(item=>bagItems.includes(item.id))
   
    return <>
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {curItems.map(item=>
                    <BagItem  key={item.id} item={item}/>
                   ) }
                </div>
                
                    <BagSummary/>
                

            </div>
        </main>
    </>
}

export default Bag