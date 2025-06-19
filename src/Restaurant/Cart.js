
// import React from "react";
// import './Cart.css'
// const Cart = ({ selectedFilter, searchQuery, addOrder }) => {
//     const items = [
//   ];
//   let filteredItems = selectedFilter === "All Items"
//     ? items
//     : items.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase());
//   if (searchQuery) {
//     filteredItems = filteredItems.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4" style={{color:"white"}}>Menu</h2> 
//       <div className="row d-flex justify-content-center">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div key={item.id} className="col-md-4 col-sm-6 mb-3">
//               <div className="card" style={{ width: "18rem", padding: "5px",borderRadius:"20px" }}>
//                 <img
//                   src={item.image}
//                   className="card-img-top"
//                   alt={item.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                   onError={(e) => (e.target.src = "default-image.jpeg")}
//                 />
//                 <div className="card-body" style={{textAlign:"center"}}>
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text">Price: ₹{item.price}</p>
//                   <button className="btn btn-primary" onClick={() => addOrder(item)}>Order</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No items found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import './Cart.css'; // Ensure you import the CSS file

const Cart = ({ selectedFilter, searchQuery, addOrder }) => {
  const items = [
    { id: 1, name: "Full Meals", category: "Rice Items", price: 200, image: "fullmeals.jpeg" },
     { id: 2, name: "Cappuccino", category: "Hot Drinks", price: 80, image: "cappuccino.jpeg" }, 
     { id: 3, name: "Fanta", category: "Cold Drinks", price: 50, image: "fanta.jpeg" }, 
    { id: 4, name: "Pepsi", category: "Cold Drinks", price: 50, image: "/pepsi.jpeg" },
    { id: 5, name: "Margherita Pizza", category: "Pizza", price: 250, image: "/mpizza.jpeg" },
    { id: 6, name: "Pepperoni Pizza", category: "Pizza", price: 300, image: "/ppizza.jpeg" },
    { id: 7, name: "Tea", category: "Hot Drinks", price: 20, image: "/tea.jpeg" },
    { id: 8, name: "Coffee", category: "Hot Drinks", price: 40, image: "/coffee.jpeg" },
    { id: 9, name: "Curd Rice", category: "Rice Items", price: 100, image: "curdrice.jpeg" },
    { id:10 , name: "Veg Biryani", category: "Rice Items", price: 120, image: "/vb.jpeg" },
    
    { id: 11, name: "Egg Fried Rice", category: "Rice Items", price: 150, image: "efr.jpeg" },
    { id: 12, name: "Paneer Fried Rice", category: "Rice Items", price: 180, image: "pfr.jpeg" },
    { id: 13, name: "Chicken Fried Rice", category: "Rice Items", price: 200, image: "cfr.jpeg" },
    { id: 14, name: "Mutton Fried Rice", category: "Rice Items", price: 250, image: "mfr.jpeg" },
    { id: 15, name: "Coca Cola", category: "Cold Drinks", price: 50, image: "/cococola.jpeg" },
    { id: 16, name: "Thums Up", category: "Cold Drinks", price: 50, image: "thumsup.jpeg" },
    { id: 17, name: "Red Bull", category: "Cold Drinks", price: 150, image: "redbull.jpeg" },
    { id: 18, name: "Sprite", category: "Cold Drinks", price: 50, image: "sprite.jpeg" }, 
    { id: 19, name: "Chicken Pizza", category: "Pizza", price: 280, image: "chickenpizza.jpeg" },
    { id: 20, name: "White Pizza", category: "Pizza", price: 260, image: "whitepizza.jpeg" },
    { id: 21, name: "Hawaiian Pizza", category: "Pizza", price: 290, image: "hawaiianpizza.jpeg" },
    { id: 22, name: "Pesto Pizza", category: "Pizza", price: 270, image: "pesto.jpeg" },
    { id: 23, name: "Green Tea", category: "Hot Drinks", price: 30, image: "green_tea.jpeg" }, 
    { id: 24, name: "Chicken Biryani", category: "Rice Items", price: 180, image: "/cb.jpeg" },
   
    { id: 25, name: "Black Tea", category: "Hot Drinks", price: 25, image: "black_tea.jpeg" }, 
    { id: 26, name: "Hot Chocolate", category: "Hot Drinks", price: 90, image: "hot_chocolate.jpeg" }, 
    { id: 27, name: "Herbal Tea", category: "Hot Drinks", price: 35, image: "herbal_tea.jpeg" } ,
    { id: 28, name: "Dum Biryani", category: "Rice Items", price: 250, image: "dum_biryani.jpeg" },
    { id: 29, name: "Fish Biryani", category: "Rice Items", price: 280, image: "fish_biryani.jpeg" },
    { id: 30, name: "Fry Piece Biryani", category: "Rice Items", price: 270, image: "fry_piece_biryani.jpeg" },
    { id: 31, name: "Chicken Lollipop Biryani", category: "Rice Items", price: 280, image: "lollipop_biryani.jpeg" },
    { id: 32, name: "Mushroom Biryani", category: "Rice Items", price: 240, image: "mushroom_biryani.jpeg" },
    { id: 33, name: "Mutton Biryani", category: "Rice Items", price: 320, image: "mutton_biryani.jpeg" },
    { id: 34, name: "Panner Biryani", category: "Rice Items", price: 200, image: "panner_biryani.jpeg" },
    { id: 35, name:"Prawns Biryani", category: "Rice Items", price: 250, image: "prawns_biryani.jpeg" },
    { id: 36, name: "Tomata Rice", category: "Rice Items", price: 80, image: "tomata_rice.jpeg" },
    { id: 37, name: "Veg Palaw", category: "Rice Items", price: 120, image: "veg_palaw.jpeg" },
    {id:38,name:"Miranda",category:"Cold Drinks",price:50,image:"miranda.jpeg"},
    {id:39,name:"Black Coffee",category:"Hot Drinks",price:40,image:"black_coffee.jpeg"},
  ];

  let filteredItems = selectedFilter === "All Items"
    ? items
    : items.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase());

  if (searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "white" }}>Menu</h2>
      <div className="row d-flex justify-content-center">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6 mb-3">
              <div className="card hover-effect" style={{ width: "18rem", padding: "5px", borderRadius: "20px" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover", borderRadius: "20px 20px 0 0" }}
                  onError={(e) => (e.target.src = "default-image.jpeg")}
                />
                <div className="card-body" style={{ textAlign: "center",color:"white" }}>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <button className="btn btn-primary" onClick={() => addOrder(item)}>Order</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center" style={{color:"white"}}>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;