import { BlogCard } from './blogCard';

export const BlogList = ({ blogs, onDelete, onToggleFeatured }) => {
  if (blogs.length === 0) return <p className="text-center text-gray-500 py-4">No blogs found.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {blogs.map((blog) => (
         <BlogCard key={blog.id} blog={blog} onDelete={onDelete} onToggleFeatured={onToggleFeatured} />
       ))}
    </div>
 );
};