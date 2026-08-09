import { API } from "../baseapi";

export const login={
    create :(login)=>{
        await API.post('/login',login)
    },
    login :(loginId)=>{
        const logId=await API.post('/login',login)
    }
}