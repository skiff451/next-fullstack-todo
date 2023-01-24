import React, {FC, useEffect} from 'react';
import styles from "./styles.module.scss"

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: JSX.Element;
}
const ModalWrapper: FC<Props> = ({setOpen, children}) => {

    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "";
        }
    }, [])
   // onClick={()=>{setOpen(false)}}
    return (
        <div className={styles.wrapper} >
            {children}
        </div>
    );
};

export default ModalWrapper;
