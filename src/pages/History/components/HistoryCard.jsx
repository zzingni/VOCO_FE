const HistoryCard = ({ date, title, subtitle, score, status, statusColor, bgColor, textColor, icon, buttonText, buttonIcon, buttonStyle, isButtonDisabled }) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50 flex flex-col md:flex-row items-center gap-6 hover:bg-slate-50 transition-colors group cursor-pointer">
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center ${textColor} shrink-0`}>
        <span className="material-symbols-outlined text-3xl" data-icon={icon}>{icon}</span>
      </div>
      <div className="flex-1 space-y-1 text-center md:text-left">
        <span className="text-sm font-semibold text-primary">{date}</span>
        <h3 className="text-xl font-bold font-headline text-on-surface">{title}</h3>
        <p className="text-on-surface-variant text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-1">
        {score === '--' ? (
          <span className="text-3xl font-black font-headline text-slate-400">
            --<span className="text-sm font-medium text-on-surface-variant">/100</span>
          </span>
        ) : (
          <span className="text-3xl font-black font-headline text-primary">
            {score}<span className="text-sm font-medium text-on-surface-variant">/100</span>
          </span>
        )}
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusColor}`}>
          {status}
        </span>
      </div>
      <button 
        className={`md:ml-4 w-full md:w-auto px-6 py-3 rounded-full font-bold text-sm flex items-center justify-center transition-opacity ${buttonStyle} ${isButtonDisabled ? 'cursor-not-allowed' : 'hover:opacity-90'}`}
        disabled={isButtonDisabled}
      >
        {buttonText}
        <span className="material-symbols-outlined ml-2 text-sm" data-icon={buttonIcon}>{buttonIcon}</span>
      </button>
    </div>
  );
};

export default HistoryCard;
