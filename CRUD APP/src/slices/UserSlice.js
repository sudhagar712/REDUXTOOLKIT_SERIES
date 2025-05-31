import { createSlice } from "@reduxjs/toolkit"


const loadFromLocalStorage = () => {
    const data = localStorage.getItem("users");
     return data ? JSON.parse(data) : []

}

const saveToLocalStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users))
}


export const  UserSlice = createSlice({
        name: "user",
        initialState:{
            list:loadFromLocalStorage()
        },

    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload)
            saveToLocalStorage(state.list);
        },
        deleteUser: (state, action)=> {
            state.list = state.list.filter((user)=> user.id !== action.payload)
            saveToLocalStorage(state.list);
        },

        updateUser: (state, action)=> {
            const user = action.payload
            state.list = state.list.map(u => u.id === user.id ? user: u)
            saveToLocalStorage(state.list);
           
        }
    }
})


export const {addUser, deleteUser, updateUser} = UserSlice.actions;
export default UserSlice.reducer

