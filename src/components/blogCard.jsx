import React from 'react';

export const BlogCard = React.memo(({ blog, onDelete, onToggleFeatured }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-sm ${blog.featured ? 'border-amber-400 bg-amber-50' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">{blog.category}</span>
        {blog.featured && <span className="text-xs text-amber-600 font-semibold">★ Featured</span>}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{blog.title}</h3>
      <p className="text-sm text-slate-600 mt-1">Author: {blog.author}</p>
      <p className="text-xs text-slate-500 mt-1">Reading Time: {blog.readingTime} mins</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onToggleFeatured(blog.id)} className="px-3 py-1 text-xs bg-amber-500 text-white rounded">
          {blog.featured ? 'Unstar' : 'Star'}
        </button>
        <button onClick={() => onDelete(blog.id)} className="px-3 py-1 text-xs bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
});
