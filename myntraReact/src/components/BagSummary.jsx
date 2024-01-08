import { useSelector } from "react-redux"

const BagSummary=()=>{
   
  let bag=useSelector(store=>store.bag);
  let items=useSelector(store=>store.items);
  let totalOriginalAmount=0,discount=0,totalAmount=0;
  items.map((item) =>
      bag.includes(item.id) ? totalOriginalAmount+=Number(item.original_price) : null
  )
  items.map((item) =>
  bag.includes(item.id) ?  discount+=(Number(item.original_price)-Number(item.current_price)): null
  )
  
  
  
  return (
  <div className="bag-summary">
   <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bag.length} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalOriginalAmount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{discount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalOriginalAmount-discount+99}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}
export default BagSummary