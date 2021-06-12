import React from 'react'

const CatMenu = ({filterItem,catagories }) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menut-tabs d-flex justify-content-around">
                    {catagories.map((CatList, index) => {
                        return (<button className="btn btn-warning" key={index} onClick={() => filterItem(CatList)}>{CatList}</button>
                        )
                    })}
                    {/* <button className="btn btn-warning" onClick={()=>setItems(MenuList)}>All</button> */}


                </div>
            </div>
        </>
    )
}

export default CatMenu;