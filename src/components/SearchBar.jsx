import React, { useEffect, useRef } from 'react';
export const SearchBar = ({ searchText, setSearchText, selectedCategory, setSelectedCategory }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto-focus input on component mount using useRef
    inputRef.current?.focus();
  }, []);
 
   return (
     <div className="flex gap-4 mb-4">
       <input
        ref={inputRef}
         type="text"
         placeholder="Search title or author..."
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
         className="p-2 border rounded w-full"
       />
       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded">
         <option value="All">All Categories</option>
         <option value="React">React</option>
         <option value="Redux">Redux</option>
         <option value="Node">Node</option>
        </select>
    </div>
   );
};