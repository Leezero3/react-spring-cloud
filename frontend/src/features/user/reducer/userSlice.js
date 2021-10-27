import { userAPI } from ".."
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const userJoinPage = async(x) => {
    const res = await userAPI.userJoin(x)
    return res.data
}
const userDetailPage  = async(x) => {
    const res = await userAPI.userDetail(x)
    return res.data
}
const userListPage = async(x) => {
    const res = await userAPI.userList()
}
const userLoginPage = async(x) => {
    const res = await userAPI.userLogin(x)
    return res.data
}
const userModifyPage = async(x) => {
    const res = await userAPI.userModify(x)
    return res.data
}
const userRemovePage = async(x) => {
    const res = await userAPI.userRemove(x)
    return res.data
}

export const joinPage = createAsyncThunk('users/join', userJoinPage)
export const detailPage = createAsyncThunk('users/one', userDetailPage)
export const listPage = createAsyncThunk('users/list', userListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifiyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)

const userSlice = createSlice({
    name : users,
    initialState: {
        userState: {},
        type: '',
        keyword: '',
        params: {}
    },
    reducers: {},
    extraReducers: {
        [joinPage.fulfilled]: ( state, action ) => { state.userState = action.payload },

        [detailPage.fulfilled]: ( state, {meta,payload} ) => { state.userState = payload },
        [listPage.fulfilled]: ( state, {meta,payload} ) => { state.userState = payload },
        
        
        [loginPage.fulfilled]: (state, {meta,payload}) => {
            state.userState = payload
            window.localStorage.setItem('sessionUser', JSON.stringify(payload)) // window 전역
        },
        [modifiyPage.fulfilled]: ( state, action ) => { 
            state.userState = action.payload
            window.localStorage.setItem('sessionUser', JSON.stringify(payload))
        },
        [removePage.fulfilled]: ( state, {meta,payload} ) => { 
            state.userState = payload
            window.localStorage.setItem('sessionUser', '')
        },
        
    }

})

export const currentUserState = (state) => state.users.userState
export const currentUserParam = state => state.user
export default userSlice.reducer;

