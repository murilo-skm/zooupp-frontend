import React, { useState } from 'react';
import TelaZooupp from './components/TelaZooupp/TelaZooupp';
import TelaLoja from './components/TelaLoja/TelaLoja';
import TelaClinicas from './components/TelaClinicas/TelaClinicas';
import TelaClinicaDetalhe from './components/TelaClinicaDetalhe/TelaClinicaDetalhe';
import TelaPetshops from './components/TelaPetShops/TelaPetShops';
import TelaHoteis from './components/TelaHoteis/TelaHoteis';

type Pagina = 'home' | 'loja' | 'clinicas' | 'clinicaDetalhe' | 'petshops' | 'hoteis';

function App() {
  const [pagina, setPagina] = useState<Pagina>('home');
  const [lojaId, setLojaId] = useState<string | null>(null);
  const [clinicaId, setClinicaId] = useState<string | null>(null); 

  const handleNavegarParaLoja = (id: string) => {
    setLojaId(id);
    setPagina('loja');
  };

  const handleNavegarParaClinicas = () => {
    setPagina('clinicas');
  };
  
  const handleNavegarParaPetshops = () => {
    setPagina('petshops');
  };

  const handleNavegarParaClinicaDetalhe = (id: string) => {
    setClinicaId(id);
    setPagina('clinicaDetalhe');
  };

  const handleNavegarParaHoteis = () => {
    setPagina('hoteis');
  };

  const handleVoltarParaHome = () => {
    setPagina('home');
    setLojaId(null);
    setClinicaId(null);
  };
  
  const handleVoltarParaClinicas = () => {
    setPagina('clinicas');
    setClinicaId(null);
  };

  const renderPagina = () => {
    if (pagina === 'loja' && lojaId) {
      return <TelaLoja storeId={lojaId} onBackClick={handleVoltarParaHome} />;
    }
    
    if (pagina === 'clinicas') {
      return <TelaClinicas 
               onBackClick={handleVoltarParaHome} 
               onClinicaClick={handleNavegarParaClinicaDetalhe}
             />;
    }
    
    if (pagina === 'clinicaDetalhe' && clinicaId) {
      return <TelaClinicaDetalhe 
               clinicaId={clinicaId} 
               onBackClick={handleVoltarParaClinicas}
             />;
    }
    
    if (pagina === 'petshops') {
      return <TelaPetshops 
               onBackClick={handleVoltarParaHome} 
               onStoreClick={handleNavegarParaLoja}
             />;
    }
    
    if (pagina === 'hoteis') {
      return <TelaHoteis onBackClick={handleVoltarParaHome} />;
    }
    
    return <TelaZooupp 
             onStoreClick={handleNavegarParaLoja} 
             onClinicasClick={handleNavegarParaClinicas}
             onPetshopsClick={handleNavegarParaPetshops}
             onHoteisClick={handleNavegarParaHoteis}
           />;
  };

  return (
    <div className="App">
      {renderPagina()}
    </div>
  );
}

export default App;