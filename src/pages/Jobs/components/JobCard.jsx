const JobCard = ({
  companyImg,
  companyName,
  jobTitle,
  location,
  salary,
  skills,
  badgeType, // 'New' or 'Urgent' or null
}) => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-outline-variant/10">
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden">
          <img className="w-full h-full object-cover bg-white" alt={companyName} src={companyImg} />
        </div>
        {badgeType === 'New' && (
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">New</span>
        )}
        {badgeType === 'Urgent' && (
          <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">Urgent</span>
        )}
      </div>
      
      <div className="mb-6">
        <p className="text-primary font-bold text-sm mb-1">{companyName}</p>
        <h3 className="text-xl font-bold text-on-surface mb-2 font-headline">{jobTitle}</h3>
        <div className="flex flex-wrap gap-3 text-on-surface-variant text-sm">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span> {location}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">payments</span> {salary}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant uppercase">
              {skill}
            </span>
          ))}
        </div>
        <button className="text-primary font-bold hover:underline flex items-center gap-1">
          Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      
    </div>
  );
};

export default JobCard;
