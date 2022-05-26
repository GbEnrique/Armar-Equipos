import { useState,useEffect } from "react"
import { GetData } from '../helpers/GetData';

export const useFetchGif = () => {
    const [state,setState]=useState({
        data:[],
        loading:true
    }); 
    
     useEffect (()=>{
        GetData()
        .then(data=>{
           
            setState({
                    data:data,
                    loading:false
                });
          
        });
        //se agrega la categoria si esta llega a cambiar
    },[ ]);
    return state; //{data: [], loading:true}
}
