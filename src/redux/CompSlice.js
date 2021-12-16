// import { createSlice } from "@reduxjs/toolkit";
 import Company from "../components/models/Company";
import { createSlice } from "@reduxjs/toolkit";
// step 3 for redux - create slices for each components 
const CompSlice = createSlice({

    name: 'company',

    initialState: {
         

        companyState: new Company(),
        companyList: []


    },

    reducers: {

        getcompanyById: (state, action) => {
            console.log('company slice reducer');
            state.companyState = action.payload;
        },

        getAllCompany: (state, action) => {
            console.log('CompSlice reducers getAllcompany');
            state.companyList = action.payload;
        },
        deletecompanyById: (state, action) => {
            console.log('CompSlice reducers deleteCompanyById');
            state.companyList = action.payload;
        },
        updatecompany: (state, action) => {
            console.log('CompSlice reducers update CompanyById');
            state.companyList = action.payload;
        },
        addcompany: (state, action) => {
            console.log('CompSlice reducers addCompanyById');
            state.companyList = action.payload;
        },

        // more methods will be added 
    }
});

export const { getcompanyById, getAllCompany , deletecompanyById,updatecompany, addcompany } = CompSlice.actions;

export default CompSlice.reducer;