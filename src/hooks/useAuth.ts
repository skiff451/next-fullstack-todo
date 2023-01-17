import {useEffect} from "react";
import {check} from "../api/auth";

export const useAuth = ()=>{
    useEffect(()=>{
        check().then()
    })
}
