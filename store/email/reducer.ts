import { createSlice } from "@reduxjs/toolkit";

import { emailDataItem } from "./types";

export interface emailStateType {
  emails: emailDataItem[];
  isLoading: boolean;
  error: any;
  reset: () => void;
}

const intialState: emailStateType = {
  emails: [],
  isLoading: false,
  error: null,
  reset: () => null,
};

export const emailSlice: any = createSlice({
  name: "email",
  initialState: intialState,
  reducers: {
    getEmails: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    getEmailsSuccess: (state, action) => {
      state.isLoading = false;
      state.emails = action.payload;
    },
    getEmailsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    sendEmail: (
      state,
      action: { payload: { data: emailDataItem; reset: () => void } },
    ) => {
      state.isLoading = true;
      state.reset = action.payload.reset;
    },
    sendEmailSuccess: (state) => {
      state.isLoading = false;
      state.reset();
    },
    sendEmailFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  sendEmail,
  sendEmailSuccess,
  sendEmailFailed,
  getEmails,
  getEmailsSuccess,
  getEmailsFailed,
} = emailSlice.actions;
