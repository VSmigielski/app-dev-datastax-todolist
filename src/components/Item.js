import React, {useState} from 'react';

function Item({item}) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(true)}
            />
            <label>{item}</label>
        </div>
    );
}

export default Item;