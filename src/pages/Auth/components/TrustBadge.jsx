const TrustBadge = () => {
  return (
    <div className="mt-8 flex justify-center items-center gap-8 opacity-50 grayscale hover:opacity-100 transition-opacity duration-500">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-lg" data-icon="verified">verified</span>
        <span className="text-xs font-bold tracking-widest uppercase">Verified AI</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-lg" data-icon="shield">shield</span>
        <span className="text-xs font-bold tracking-widest uppercase">Secure Auth</span>
      </div>
    </div>
  );
};

export default TrustBadge;
