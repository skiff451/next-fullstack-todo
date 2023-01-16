import React, {useEffect, useState} from 'react';
import RadioButton from "../../inputs/RadioButton";
import styles from "./styles.module.scss"

const Filters = () => {
    const [checkedItem, setCheckedItem] = useState("latest")


    useEffect(() => {
        console.log({checkedItem})
    }, [checkedItem])
    return (
        <div className={styles.filters}>
            <div className={styles.radioGroup}>
                <RadioButton label={"latest"} checked={checkedItem} onChange={setCheckedItem}/>
                <RadioButton label={"oldest"} checked={checkedItem} onChange={setCheckedItem}/>
                <RadioButton label={"all"} checked={checkedItem} onChange={setCheckedItem}/>
            </div>

            {/*<div>*/}
            {/*    <Button*/}
            {/*        label={"in process"}*/}
            {/*        variant={"primary"}*/}
            {/*        callback={() => {*/}
            {/*        }}*/}
            {/*        style={*/}
            {/*            {*/}
            {/*                color: "#7d7db7",*/}
            {/*                width: "100px",*/}
            {/*                height: "35px",*/}
            {/*                background: "#DECC0051",*/}
            {/*                border: "1px #7d7db7 solid",*/}
            {/*            }*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Button*/}
            {/*        label={"done"}*/}
            {/*        variant={"primary"}*/}
            {/*        callback={() => {*/}
            {/*        }}*/}
            {/*        style={*/}
            {/*            {*/}
            {/*                color: "#7d7db7",*/}
            {/*                width: "100px",*/}
            {/*                height: "35px",*/}
            {/*                background: "#23C51A51",*/}
            {/*                border: "1px #7d7db7 solid",*/}
            {/*            }*/}
            {/*        }*/}
            {/*    />*/}
            {/*    <Button*/}
            {/*        label={"expired"}*/}
            {/*        variant={"primary"}*/}
            {/*        callback={() => {*/}
            {/*        }}*/}
            {/*        style={*/}
            {/*            {*/}
            {/*                color: "#7d7db7",*/}
            {/*                width: "100px",*/}
            {/*                height: "35px",*/}
            {/*                background: "#FC7D7D51",*/}
            {/*                border: "1px #7d7db7 solid",*/}
            {/*            }*/}
            {/*        }*/}
            {/*    />*/}
            {/*</div>*/}

        </div>
    );
};

export default Filters;
