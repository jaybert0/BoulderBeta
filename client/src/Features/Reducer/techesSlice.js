import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTech = createAsyncThunk(
  "teches/fetchTech",
  async () => {
    return fetch('/teches').then((res) => res.json()).then((data) => data);
  }
);

export const deleteTech = createAsyncThunk(
  "teches/deleteTech",
  async (locId) => {
    fetch(`/teches/${locId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return locId;
  }
);

export const createTech = createAsyncThunk(
  "teches/createTech",
  async (newTech) => {
    return fetch(`/teches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTech),
    }).then((res) => res.json());
  }
);

export const updateTech = createAsyncThunk(
  "teches/updateTech",
  async (updateTech) => {
    return fetch(`/teches/${updateTech['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTech),
    }).then((res) => res.json());
  }
);

const techSlice = createSlice({
  name: "teches",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTech.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteTech.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (tech) => tech.id !== action.payload
      );
    },
    [createTech.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    [updateTech.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (tech) => tech.id !== action.payload['id']
      )
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default techSlice.reducer;