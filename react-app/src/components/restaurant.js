// // import React from 'react'

// const CardBox=(props) => {
//     return(
//         <div className="card-body">
//             {props.children}
//         </div>
//     )
// }

// const image=(props) =>{
//     return(
//         <img src={props.image} alt="Logo" className="picture">
//         </img>
//     )
// }

// const name=(props) =>{
//     return(
//         <div className="name">
//             {props.name}
//         </div>
//     )
// }

// const details=(props) =>{
//     return(
//         <div className="details">
//             {props.details}
//         </div>
//     )
// }


// const star=({selected=false,onClick=f=>f}) =>{
//     <div className={(selected) ? "star selected":"star"} onClick={onClick}></div>

// }


// const card=(props) =>{
//     return(
//         <CardBox>

//             <div className="inner-body">
//                 <Image image={props.image}/>
//             </div>

//             <div className="body">
//                 <div className="nner-body">
//                     <Name name={props.name}/>
//                 </div>

//                 <Details details={props.details}/>

//                 <div className="inner-body">
//                     {[...Array(5)].map((n,i)=>
//                     <Star key={i}
//                     selected={i<props.starsSelected} onClick={()=>props.change(prps.id,i+1)}/>)}
//                 </div>
//             </div>
//         </CardBox>
//     )
// }

// // export {card}