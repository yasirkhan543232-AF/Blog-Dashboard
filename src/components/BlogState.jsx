export const BlogStats = ({ blogs }) => {
  const totalBlogs = blogs.length;
  const featuredCount = blogs.filter(b => b.featured).length;
  const totalReadTime = blogs.reduce((acc, b) => acc + Number(b.readingTime), 0);

  return (
    <div className="p-3 bg-slate-100 rounded mb-4 text-xs flex justify-around font-semibold text-slate-700">
       <span>Total Articles: {totalBlogs}</span>
       <span>Featured Articles: {featuredCount}</span>
       <span>Total Read Time: {totalReadTime} mins</span>
     </div>
   );
 };