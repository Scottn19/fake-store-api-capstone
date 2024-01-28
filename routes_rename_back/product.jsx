// import React, {useEffect, useState} from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { getPlayerbyId, deletePlayer } from '../API';
// import PlayerCard from './PuppyCard/PlayerCard';


const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.get("/", product.getAllProducts);
router.get("/categories", product.getProductCategories);
router.get("/category/:category", product.getProductsInCategory);
router.get("/:id", product.getProduct);
router.post("/", product.addProduct);
router.put("/:id", product.editProduct);
router.patch("/:id", product.editProduct);
router.delete("/:id", product.deleteProduct);



export default function Product() {
    const navigate= useNavigate();
    const [ product, setProduct] = useState({});
    const {id} = useParams();


    useEffect(() => {
        async function getProductData(){
            try{
                const productObj = await getProductbyId(id);
                if(productObj.data === null){
                    navigate("/")
                }
                setProduct(productObj)
        }catch(err){
            console.log(err);
        }
    }
    getProductData();
}, [navigate]);

// async function handleDelete(){
//     try{
//         const result = await deletePlayer(id);
//         if(result.success){
//             alert("Puppy successfully deleted!");
//             navigate("/");
          
        //   }else{
        //     alert("Something went wrong with deleting the puppy! Please try again!")
        //   }
        
//     }catch(err)
//     {console.log(err)}
// }

    //  return (
    //  <div style={{display: 'flex',
    //  flexDirection: "column",
    //  justifyContent: 'center',
    //  alignItems: 'center'
    //  }}>
    //     <PlayerCard player={puppy} component={"detail"}/>
    //     <button onClick={handleDelete}>Remove Product From Cart</button>
    //         </div>
    //  );
}
module.exports = router;
