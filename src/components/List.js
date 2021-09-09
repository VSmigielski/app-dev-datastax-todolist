import React from 'react'
import Item from './Item';

function List({itemList}) {

    return (
        itemList.map((item) => (
            <Item item={item} />
        ))
    );
}

export default List;