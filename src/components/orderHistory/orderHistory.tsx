import React from "react"
import { useState } from 'react';
import { useEffect } from 'react';
import orderHistory from "../../interfaces/iOrderHistory";
import orderHistoryItems from "../../interfaces/iOrderHistoryItems";
import dataOne from "../../dummyData/dataOne";
import dataTwo from "../../dummyData/dataTwo";
import OrderRow from "./orderRow";

export default () => {

  const [orderHistory, setOrderHistory] = useState<Array<orderHistory>>([])

  const myPromise = (time: number) => {
      let promise = new Promise( (resolve, reject) => {
         setTimeout(function () {
            resolve("This promise is resolved");
         }, time);
      });
      return promise

    };
    
  useEffect( () => {
    myPromise(3000)
    .then( () => {
      setOrderHistory(dataOne)
    })
    .then( () => {
      myPromise(3000)
      .then( () => {
        const newOrderHistory :orderHistory[] = dataOne.map( order => {
          let newItemDetails;
          dataTwo.forEach((item) => {
            console.log(item)
            console.log(`item.orderId is: ${item.orderId} and order.ordierId is:${order.orderId}`)
            if ( item.orderId === order.orderId) {
              console.log(item.itemDetails)
              newItemDetails = item.itemDetails
            }
          } );
          console.log(`newItemDetails is: ${newItemDetails}`)
          order.itemDetails = newItemDetails;
          return order;
        })
        console.dir(newOrderHistory)
        setOrderHistory(newOrderHistory)
      })
    })
  }, [])

  const OrderHistoryItems = (order: orderHistoryItems) => {
    return `Product Name: ${order.itemDetails.productName}, Qty: ${order.itemDetails.qty}`
  }

  const listOrderHistory = orderHistory.map( order => {
    return (
      <div>
        <tr>
          <td>{order.orderId}</td>
          <td>{order.purchased}</td>
          <td>{order.billingName}</td>
          <td>{order.shippingName}</td>
          <td>{order.orderTotal}</td>
          <td>{order.status}</td>
          <td>{order.purchasePoint}</td>
          <td>{order.itemDetails ? OrderHistoryItems(order ) : "Loading item details"}</td>
        </tr>
      </div>
    )
  });

  return (
    <div>
      <h1>Order History</h1>
      <table>
        
          <th>Order Id</th>
        
        
          <th>Purchased</th>
        
        
          <th>Bill-to-Name</th>
        
        
          <th>Ship-to-Name</th>
        
        
          <th>Order Total</th>
        
        
          <th>Status</th>
        
        
          <th>Purchase Point</th>
        
        
          <th>Item Details</th>
          {listOrderHistory}
        
      </table>
    </div>
  )
}