import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
  "locations/fetchLocation",
  async () => {
    return fetch('/locations').then((res) => res.json()).then((data) => data);
  }
);

export const deleteLocation = createAsyncThunk(
  "locations/deleteLocation",
  async (locId) => {
    fetch(`/locations/${locId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return locId;
  }
);

export const createLocation = createAsyncThunk(
  "locations/createLocation",
  async (newLocation) => {
    return fetch(`/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    }).then((res) => res.json());
  }
);

export const updateLocation = createAsyncThunk(
  "locations/updateLocation",
  async (updateLocation) => {
    return fetch(`/locations/${updateLocation['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateLocation),
    }).then((res) => res.json());
  }
);

const locationSlice = createSlice({
  name: "locations",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchLocation.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteLocation.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (location) => location.id !== action.payload
      );
    },
    [createLocation.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    [updateLocation.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (location) => location.id !== action.payload['id']
      )
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default locationSlice.reducer;