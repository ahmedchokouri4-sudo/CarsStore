import React, { useState, useEffect } from 'react';

const Stock = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const savedData = JSON.parse(localStorage.getItem('formData')) || [];
      setCars(savedData);
      setLoading(false);
    };
    loadData();
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  const handleDelete = (index) => {
    const updated = cars.filter((_, i) => i !== index);
    setCars(updated);
    localStorage.setItem('formData', JSON.stringify(updated));
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans antialiased">
     
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-16">
        
        
        <header className="mb-10 lg:mb-16 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Stock <span className="text-gray-400 not-italic">Atual</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              {cars.length} Veículos Disponíveis
            </p>
          </div>
          <div className="bg-black text-white px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-black/10">
            Showroom Pro
          </div>
        </header>

        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
             {[1,2,3].map(i => <div key={i} className="h-72 bg-gray-200 rounded-[2.5rem]" />)}
          </div>
        ) : cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {cars.map((car, index) => (
              <div key={index} className="group bg-white rounded-[2.2rem] sm:rounded-[2.8rem] p-4 sm:p-5 border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                
                {/* Delete Button (X) */}
                <button 
                  onClick={() => handleDelete(index)}
                  className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm text-red-500 w-8 h-8 rounded-full shadow-sm md:opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                >
                  ✕
                </button>

                
                <div className="h-48 sm:h-56 lg:h-60 w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-gray-50 mb-4 sm:mb-6 relative">
                  <img 
                    src={car.image || 'https://via.placeholder.com/600x400?text=No+Photo'} 
                    alt={car.model}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur text-white text-[8px] sm:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {car.vyear} • {car.vmilage} KM
                  </div>
                </div>

                {/* Details Section */}
                <div className="px-1 sm:px-2">
                  <h3 className="text-lg sm:text-xl font-black uppercase italic tracking-tighter text-slate-900 leading-tight">
                    {car.mark} <span className="text-gray-400 not-italic font-bold">{car.model}</span>
                  </h3>
                  <p className="text-[9px] sm:text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-1 mb-4 sm:mb-6">
                    {car.version || 'Premium Edition'}
                  </p>

                  <div className="flex items-end justify-between border-t border-gray-50 pt-4 sm:pt-6">
                    <div className="flex flex-col">
                      <span className="text-[7px] sm:text-[8px] font-black text-gray-300 uppercase mb-0.5 sm:mb-1">Preço de Venda</span>
                      <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none">
                        <span className="text-xs font-bold mr-0.5 text-slate-400 italic">R$</span> 
                        {Number(car.desiredValue).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:-rotate-45">
                       <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State - Responsive padding */
          <div className="h-64 sm:h-96 w-full flex flex-col items-center justify-center bg-white rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-dashed border-gray-100 text-center px-4">
            <div className="text-4xl sm:text-5xl mb-4 opacity-20">🚗</div>
            <h2 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Estoque Vazio</h2>
            <button className="text-[9px] sm:text-[10px] font-black underline uppercase tracking-widest mt-4">Anunciar agora</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stock;