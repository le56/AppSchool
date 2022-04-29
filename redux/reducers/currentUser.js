import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
export const login = createAsyncThunk(
  // Tên action
  'user/login',
  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (idToken, {rejectWithValue}) => {
    // Gọi lên API backend
    const response = await fetch(
      'https://nguyenngockhanh.xyz/api/auth/google/login',
      {
        method: 'POST',
        body: {
          tokenId: idToken,
        },
      },
    )
      .then(response => response.json)
      .catch(error => {
        console.log(error);
      });
  },
);

const currentUser = createSlice({
  name: 'user',
  initialState: {
    tokenID: '',
    user: null,
    loading: false,
  },
  reducers: {
    addTokenID(state, action) {
      state.tokenID = action.payload;
    },
    changeLoading(state,action){
      state.loading = action.payload
    },
    setUser(state,action){
      state.user = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
    });
  },
});


export const {changeLoading, setUser} = currentUser.actions

export default currentUser;
