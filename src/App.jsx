import  { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { BlogList } from './components/BlogList';
import { BlogStats } from './components/BlogState';
import { fetchBlogsAsync, deleteBlog, toggleFeatured, setSearchText, setSelectedCategory } from './redux/blogSlice';

export default function App() {
  const dispatch = useDispatch();
  const { blogs, searchText, selectedCategory, loading, error } = useSelector((state) => state.blogs);
 
  useEffect(() => { dispatch(fetchBlogsAsync()); }, [dispatch]);
 
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = searchText === '' || blog.title.toLowerCase().includes(searchText.toLowerCase()) || blog.author.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = useCallback((id) => dispatch(deleteBlog(id)), [dispatch]);
  const handleToggle = useCallback((id) => dispatch(toggleFeatured(id)), [dispatch]);
 
  return (
     <div className="dashboard-container">
       <Header />
       <SearchBar
         searchText={searchText}
        setSearchText={(txt) => dispatch(setSearchText(txt))}
         selectedCategory={selectedCategory}
         setSelectedCategory={(cat) => dispatch(setSelectedCategory(cat))}
       />
       <BlogStats blogs={filteredBlogs} />
       {loading && <p className="text-center py-4 text-blue-600 font-medium">Loading blogs from Redux store...</p>}
       {error && <p className="text-center py-4 text-red-600 font-medium"> {error}</p>}
       {!loading && !error && (
         <BlogList blogs={filteredBlogs} onDelete={handleDelete} onToggleFeatured={handleToggle} />
       )}
     </div>
   );
 }