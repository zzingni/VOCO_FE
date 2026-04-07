const PostCard = ({ 
  badges, 
  timeAgo, 
  title, 
  previewText, 
  authorImg, 
  authorName, 
  authorRole, 
  likes, 
  comments 
}) => {
  return (
    <article className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg transition-all duration-300 hover:bg-surface-container-high cursor-pointer shadow-sm border border-slate-50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2">
          {badges.map((badge, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider ${badge.style}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <span className="text-xs text-outline font-medium">{timeAgo}</span>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
        {title}
      </h2>
      
      <p className="text-on-surface-variant text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
        {previewText}
      </p>
      
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <img 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white bg-slate-100" 
            src={authorImg} 
          />
          <div>
            <div className="text-sm font-bold text-on-surface">{authorName}</div>
            <div className="text-[10px] text-outline font-semibold">{authorRole}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-outline font-medium text-sm">
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg" data-icon="thumb_up">thumb_up</span>
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg" data-icon="chat_bubble">chat_bubble</span>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
