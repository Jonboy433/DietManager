import React from 'react';

function DailyMealItem(props) {

    return (
            <tr id={ props.meal.mealType.toLowerCase() + '-item' }>
                <td>{props.meal.name}</td>
                <td>{props.meal.value}</td>
            </tr>
    )

}

export default DailyMealItem