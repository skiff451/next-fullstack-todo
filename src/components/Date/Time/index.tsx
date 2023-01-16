import React, {FC} from 'react';

type Props ={
    date:Date;
}
const Time:FC<Props> = ({date}) => {
    return (
        <span>
            <span>{date.getHours()}</span>
            <span>{":"}</span>
            <span>{date.getMinutes()}</span>
        </span>
    );
};

export default Time;
