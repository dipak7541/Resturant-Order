import React, { useState } from 'react'
import './menu.css';
import MenuList from './MenuList';
import CatMenu from './CatMenu';
import MenuItems from './MenuItems';


const Menu = () => {
    const [items, setItems] = useState(MenuList);
    const allCatValues = [...new Set(MenuList.map((currElem) => currElem.category)), "all"];
    console.log(allCatValues)

    const [catagories, setCatagories]= useState(allCatValues);

    const filterItem = (cetegItem) => {
        
        if (cetegItem === "all") {
            setItems(MenuList);
            return;
        }
        else {
            const updatedItems = MenuList.filter((currElem) => {
                return currElem.category === cetegItem;
            })
            setItems(updatedItems);
        }
    }
    return (
        <>
            <div>
                <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish</h1>
                <hr />
                <CatMenu filterItem={filterItem} catagories={catagories}/>

                <MenuItems items={items} />
                
            </div>
        </>
    )
}

export default Menu;
