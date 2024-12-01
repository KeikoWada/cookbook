import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getRecipes = createAsyncThunk(
  "recipe/getRecipes",
  async (userId) => {
    //const { apiClient } = extra;
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  }
);

export default getRecipes