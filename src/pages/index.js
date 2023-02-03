import styles from '@/styles/Home.module.css'
import image from '../../public/vetor.png'
import SmallCalendar from './calendar';
import TimePickerButtons from './botoes';
import InputCPF from './input';
import Footer from './footer';

function Navbar() {
  return (
    <div>
    <nav className={styles.nav_index}>
      <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Página Inicial</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Sobre Nós</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Agendamentos</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Serviços</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Nossos Profissionais</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Contato</a></li>
        <li><a style={{color: 'white', textDecoration: 'none'}} href="#">Usuario#0001</a></li>
      </ul>
      {/* <img src={image} alt="Image" /> */}
      <h2 style={{position:'relative', color: 'white', fontSize: '7rem', fontFamily: 'Cormorant', left:'52rem', top:'6rem'}}>Agendamentos</h2>
    </nav>
    <SmallCalendar/>
    <TimePickerButtons/>
    <InputCPF/>
    </div>
  );
}



export default Navbar;

