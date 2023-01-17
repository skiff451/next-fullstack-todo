import React from 'react';
import styles from "../styles.module.scss";
import Button from "../../Button";

const style = {
    color: "#7d7db7",
    width: "100px",
    height: "35px",
    border: "1px #7d7db7 solid",
}

const ButtonGroup = () => {
    return (
        <div className={styles.buttonGroup}>
            <Button
                label={"in process"}
                variant={"primary"}
                callback={() => {
                }}
                style={{...style, background: "#DECC0051",}}
            />
            <Button
                label={"done"}
                variant={"primary"}
                callback={() => {
                }}
                style={{...style, background: "#23C51A51",}}
            />
            <Button
                label={"expired"}
                variant={"primary"}
                callback={() => {
                }}
                style={{...style, background: "#FC7D7D51",}}
            />
        </div>
    );
};

export default ButtonGroup;
