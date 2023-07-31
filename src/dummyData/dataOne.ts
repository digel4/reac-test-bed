import orderHistory from "../interfaces/iOrderHistory"

const dataOne: orderHistory[] = [
  {
    orderId: 1,
    purchased: "13/04/2023",
    billingName: "Joe",
    shippingName:"Michael",
    orderTotal:87,
    status: "Cancelled",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 2,
    purchased: "12/01/2023",
    billingName: "Gavin",
    shippingName:"Todd ",
    orderTotal:76,
    status: "Cancelled",
    purchasePoint: "Website",
    itemDetails: null
  },
  {
    orderId: 3,
    purchased: "24/05/2023",
    billingName: "Beth",
    shippingName:"Tom",
    orderTotal:34,
    status: "Shipped",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 4,
    purchased: "01/02/2023",
    billingName: "James",
    shippingName:"Rachel",
    orderTotal:45,
    status: "Cancelled",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 5,
    purchased: "25/01/2023",
    billingName: "Tim",
    shippingName:"Tim",
    orderTotal:87,
    status: "Delivered",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 6,
    purchased: "12/02/2023",
    billingName: "Greg",
    shippingName:"Greg",
    orderTotal:76,
    status: "Delivered",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 7,
    purchased: "12/04/2023",
    billingName: "Bill",
    shippingName:"Bill",
    orderTotal:54,
    status: "Delivered",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 8,
    purchased: "02/07/2023",
    billingName: "Lisa",
    shippingName:"Lisa",
    orderTotal:11,
    status: "Shipped",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 9,
    purchased: "25/03/2023",
    billingName: "Caitlin",
    shippingName:"Caitlin",
    orderTotal:43,
    status: "Delivered",
    purchasePoint: "Website",
    itemDetails: null
  },
  {
    orderId: 10,
    purchased: "11/05/2023",
    billingName: "Claire",
    shippingName:"Michael Short",
    orderTotal:12,
    status: "Delivered",
    purchasePoint: "Store",
    itemDetails: null
  },
  {
    orderId: 11,
    purchased: "01/02/2023",
    billingName: "Claire ",
    shippingName:" ",
    orderTotal:22,
    status: "Delivered",
    purchasePoint: "Website",
    itemDetails: null
  }
];

export default dataOne;