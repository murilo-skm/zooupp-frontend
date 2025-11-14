import { useState } from 'react';
import TelaZooupp from './components/TelaZooupp/TelaZooupp';
import TelaLoja from './components/TelaLoja/TelaLoja';
import TelaClinicas from './components/TelaClinicas/TelaClinicas';
import TelaClinicaDetalhe from './components/TelaClinicaDetalhe/TelaClinicaDetalhe';
import TelaPetshops from './components/TelaPetShops/TelaPetShops';
import TelaHoteis from './components/TelaHoteis/TelaHoteis';
import TelaTinderPetBusca from './components/TelaTinderPetBusca/TelaTinderPetBusca';
import TelaTinderPetMatches from './components/TelaTinderPetMatches/TelaTinderPetMatches';
import TelaOngs from './components/TelaOngs/TelaOngs';
import TelaOngDetalhe from './components/TelaOngsDetalhe/TelaOngsDetalhe';
import TelaParceiros from './components/TelaParceiros/TelaParceiros';

type Pagina = 'home' | 'loja' | 'clinicas' | 'clinicaDetalhe' | 'petshops' | 'hoteis' | 'tinderPetBusca' | 'tinderPetMatches' | 'ongs' | 'ongDetalhe' | 'parceiros';

function App() {
  const [pagina, setPagina] = useState<Pagina>('home');
  const [lojaId, setLojaId] = useState<string | null>(null);
  const [clinicaId, setClinicaId] = useState<string | null>(null); 
  const [ongId, setOngId] = useState<string | null>(null);
  const [tinderRaca, setTinderRaca] = useState('');
  const [tinderCor, setTinderCor] = useState('');
  const [tinderEstiloPelo, setTinderEstiloPelo] = useState('');
  const [tinderSexo, setTinderSexo] = useState(''); 

  const [showDiscountModal, setShowDiscountModal] = useState(false);
  
  const handleNavegarParaLoja = (id: string) => { setLojaId(id); setPagina('loja'); };
  const handleNavegarParaClinicas = () => { setPagina('clinicas'); };
  const handleNavegarParaPetshops = () => { setPagina('petshops'); };
  const handleNavegarParaHoteis = () => { setPagina('hoteis'); };
  const handleNavegarParaTinderPetBusca = () => { setPagina('tinderPetBusca'); };
  const handleNavegarParaClinicaDetalhe = (id: string) => { setClinicaId(id); setPagina('clinicaDetalhe'); };
  const handleNavegarParaOngs = () => { setPagina('ongs'); };
  const handleNavegarParaOngDetalhe = (id: string) => { setOngId(id); setPagina('ongDetalhe'); };
  const handleNavegarParaParceiros = () => { setPagina('parceiros'); };

  const handleBuscarTinderPetMatches = (raca: string, cor: string, estiloPelo: string, sexo: string) => {
    setTinderRaca(raca); 
    setTinderCor(cor); 
    setTinderEstiloPelo(estiloPelo);
    setTinderSexo(sexo); 
    setPagina('tinderPetMatches');
  };

  const handleVoltarParaHome = () => {
    setPagina('home');
    setLojaId(null);
    setClinicaId(null);
    setOngId(null);
    setTinderRaca(''); setTinderCor(''); setTinderEstiloPelo('');
    setTinderSexo('');
  };
  
  const handleAbrirModal = () => { setShowDiscountModal(true); };
  const handleCloseModal = () => { setShowDiscountModal(false); };
  const handleVoltarParaClinicas = () => { setPagina('clinicas'); setClinicaId(null); };
  const handleVoltarParaTinderPetBusca = () => { setPagina('tinderPetBusca'); };
  const handleVoltarParaOngs = () => { setPagina('ongs'); setOngId(null); };

  const renderPagina = () => {
    if (pagina === 'loja' && lojaId) {
      return <TelaLoja storeId={lojaId} onBackClick={handleVoltarParaHome} />;
    }
    if (pagina === 'clinicas') {
      return <TelaClinicas onBackClick={handleVoltarParaHome} onClinicaClick={handleNavegarParaClinicaDetalhe} />;
    }
    if (pagina === 'clinicaDetalhe' && clinicaId) {
      return <TelaClinicaDetalhe clinicaId={clinicaId} onBackClick={handleVoltarParaClinicas} />;
    }
    if (pagina === 'petshops') {
      return <TelaPetshops onBackClick={handleVoltarParaHome} onStoreClick={handleNavegarParaLoja} />;
    }
    if (pagina === 'hoteis') {
      return <TelaHoteis onBackClick={handleVoltarParaHome} />;
    }
    if (pagina === 'tinderPetBusca') {
      return <TelaTinderPetBusca onBackClick={handleVoltarParaHome} onBuscarMatches={handleBuscarTinderPetMatches} />;
    }
    if (pagina === 'tinderPetMatches') {
      return <TelaTinderPetMatches 
               onBackClick={handleVoltarParaTinderPetBusca}
               raca={tinderRaca}
               cor={tinderCor}
               estiloPelo={tinderEstiloPelo}
               sexo={tinderSexo} 
             />;
    }
    if (pagina === 'ongs') {
      return <TelaOngs onBackClick={handleVoltarParaHome} onOngClick={handleNavegarParaOngDetalhe} />;
    }
    if (pagina === 'ongDetalhe' && ongId) {
      return <TelaOngDetalhe ongId={ongId} onBackClick={handleVoltarParaOngs} />;
    }
    if (pagina === 'parceiros') {
      return <TelaParceiros onBackClick={handleVoltarParaHome} />;
    }
    
    return <TelaZooupp 
             onStoreClick={handleNavegarParaLoja} 
             onClinicasClick={handleNavegarParaClinicas}
             onPetshopsClick={handleNavegarParaPetshops}
             onHoteisClick={handleNavegarParaHoteis}
             onTinderPetClick={handleNavegarParaTinderPetBusca}
             onAdocaoClick={handleNavegarParaOngs}
             onParceirosClick={handleNavegarParaParceiros}
             onLogoClick={handleAbrirModal}
             showModal={showDiscountModal}
             onCloseModal={handleCloseModal}
           />;
  };

  return (
    <div className="App">
      {renderPagina()}
    </div>
  );
}

export default App;