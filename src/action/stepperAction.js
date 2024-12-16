// performaSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  BillType: '',
  companyName: '',
  companyPanNo: '',
  state: 'Maharashtra',
  invoiceNo: '',
  receiverName: '',
  gstin: '',
  receiverAddress: '',
  receiverGstin: '',
  receiverState: '',
  stateCode: '27',
  projectNo: '',
  invoiceDate: '',
  projectReferenceNo: '',
  workOrderNo: '',
  particulars: '',
  amtRs: '',
  amtWords: '',
  bankDetails: '',
  accountNo: '',
  ifscCode: '',
  accountName: '',
  sac_code: '',
  cgst:'',
  sgst:'',
  tot:'',
  gst:true
};

const performaSlice = createSlice({
  name: 'performa',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { fieldId, value } = action.payload;
      state[fieldId] = value;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateField, resetForm } = performaSlice.actions;
export default performaSlice.reducer;
