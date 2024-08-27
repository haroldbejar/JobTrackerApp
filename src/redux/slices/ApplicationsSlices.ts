import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "../../interfaces/Application";

interface ApplicationsState {
  applications: Application[];
}

const initialState: ApplicationsState = {
  applications: [],
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<Application>) => {
      state.applications.push(action.payload);
    },
    updateApplication: (state, action: PayloadAction<Application>) => {
      const index = state.applications.findIndex(
        (application) => application.id === action.payload.id
      );
      if (index !== -1) {
        state.applications[index] = action.payload;
      }
    },
    deleteApplication: (state, action: PayloadAction<string>) => {
      state.applications = state.applications.filter(
        (application) => application.id !== action.payload
      );
    },
  },
});

export const { addApplication, updateApplication, deleteApplication } =
  applicationsSlice.actions;
export default applicationsSlice.reducer;
