
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Orders = ({ orders }) => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh",color:"white"}}>
      <Header orderCount={orders.length} showSearch={false} />

      <div className="container text-center" style={{ marginTop: "70px" }}>  
        <h3>Orders</h3>

        {orders.length === 0 ? (
          <div>
            <p>No orders yet.</p>
          </div>
        ) : (
          <div className="row d-flex justify-content-center">
            {orders.map((order, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div className="card" style={{ width: "18rem", padding: "5px" }}>
                  <img
                    src={order.image}
                    className="card-img-top"
                    alt={order.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body" style={{color:"white"}}>
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text">Price: ₹{order.price}</p>
                    <p className="card-text"><strong>Table:</strong> {order.table}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      </div>
     );
};

export default Orders;






