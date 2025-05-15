import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
export const fetchTodos=createAsyncThunk('fetchTodos',async ()=>{
    try{
    const responce=await axios.get("https://jsonplaceholder.typicode.com/todos");
    return responce.data;
    }catch(e){
       console.log("error",e);
    }
})

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError=true;
        });
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
    }
})

export default todoSlice.reducer;
