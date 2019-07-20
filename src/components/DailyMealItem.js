import React from 'react';

function DailyMealItem(props) {

    return (
        <div>
            <tr>
                <td>{props.item.name}</td>
                <td>{props.item.value}</td>
            </tr>
        </div>
    )

}

export default DailyMealItem