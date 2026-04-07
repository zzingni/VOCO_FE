const FloatingMicrophone = () => {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-50">
      <span className="material-symbols-outlined text-3xl" data-icon="mic" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
    </button>
  );
};

export default FloatingMicrophone;
