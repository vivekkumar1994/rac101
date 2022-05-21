import React from "react";
// const RestaurantDetail = (props) => {
//     const {
//       name,
//       id,
//       cuisine,
//       costForTwo,
//       minOrder,
//       deliveryTime,
//       payment_methods: { cash, card, upi },
//       rating,
//       votes,
//       reviews,
//       src
//     } = props.data;
  
//     return (
//       <div
//         style={{
//           border: "1px solid black",
//           width: "500px",
//           height: "275px",
//           marginLeft: "30%",
//           marginBottom: "20px"
//         }}
//         key={id}
//       >
//         <div style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
//           <div style={{ marginTop: "50px" }}>
//             <img src={src} width="100px" height="120px" />
//           </div>
//           <div style={{ textAlign: "left", paddingLeft: "14px" }}>
//             <h4>{name}</h4>
//             <p> {cuisine.join(", ")}</p>
//             <p> Costs for Two {costForTwo}</p>
//             <p>
//               Min: {minOrder} - Upto {deliveryTime} min
//             </p>
//             {cash && card && upi ? (
//               <p>Accepts : "All"</p>
//             ) : card ? (
//               <p>Accepts : "Card"</p>
//             ) : cash ? (
//               <p>Accepts : "Cash"</p>
//             ) : (
//               <p>Accepts : "Upi"</p>
//             )}
//           </div>
//           <div style={{ textAlign: "right", marginLeft: "60px" }}>
//             <div
//               style={{
//                 width: "40px",
//                 background: "green",
//                 color: "white",
//                 textAlign: "center",
//                 height: "20px",
//                 borderRadius: "4px",
//                 marginLeft: "44px"
//               }}
//             >
//               {rating}
//             </div>
//             <div>{votes} votes</div>
//             <div>{reviews} reviews</div>
//           </div>
//         </div>
//         <div
//           style={{
//             borderTop: "1px solid black",
//             textAlign: "right",
//             padding: "20px"
//           }}
//         >Order Online/>
//         </div>
//       </div>
//     );
//   };
  
//   export default RestaurantDetail