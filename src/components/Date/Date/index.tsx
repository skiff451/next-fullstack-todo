import React, {FC} from 'react';

type Props ={
    date:Date;
}
const Date:FC<Props> = ({date}) => {
    return (
        <span>
            <span>{date.getDate()}</span>
            <span>{" "}</span>
            <span>{date.getMonth()}</span>
            <span>{" "}</span>
            <span>{date.getFullYear()}</span>
        </span>
    );
};

export default Date;
