import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialBlogs } from '../data/initailBlogs';

//Simulated Async API Call using createAsyncThunk
 export const fetchBlogsAsync = createAsyncThunk('blogs/fetchBlogs', async (_, { rejectWithValue }) => {
   try {
     await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
     return initialBlogs;
   } catch (err) {
     return rejectWithValue('Failed to load initial blog records.');
 }
 });
 
 const blogSlice = createSlice({
   name: 'blogs',
   //Required Redux initial state
   initialState: {
     blogs: [],
     searchText: '',
     selectedCategory: 'All',
     loading: false,
     error: null,
   },
   //Reducers for state operations
 reducers: {
     addBlog: (state, action) => {
       state.blogs.unshift({ id: Date.now(), ...action.payload });
     },
     deleteBlog: (state, action) => {
       state.blogs = state.blogs.filter((b) => b.id !== action.payload);
     },
     toggleFeatured: (state, action) => {
       const blog = state.blogs.find((b) => b.id === action.payload);
       if (blog) blog.featured = !blog.featured;
    },
     setSearchText: (state, action) => {
       state.searchText = action.payload;
     },
     setSelectedCategory: (state, action) => {
       state.selectedCategory = action.payload;
     },
   },
   // ExtraReducers handling pending, fulfilled, and rejected
   extraReducers: (builder) => {
     builder
       .addCase(fetchBlogsAsync.pending, (state) => {
         state.loading = true; state.error = null;
       })
       .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
         state.loading = false; state.blogs = action.payload;
       })
       .addCase(fetchBlogsAsync.rejected, (state, action) => {
         state.loading = false; state.error = action.payload;
       });
   },
 });
 
 export const { addBlog, deleteBlog, toggleFeatured, setSearchText, setSelectedCategory } = blogSlice.actions;
 export default blogSlice.reducer;