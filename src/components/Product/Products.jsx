import React from "react";
import Sort from "../Sort/Sort";
import Cards from "./Cards";

const Products = () => {
    return(
        <>
            <Sort />
            <div className="outer-wrapper">
                <Cards />
            </div>
        </>
    )
}

export default Products;