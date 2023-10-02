import './style/styles.css';
import './components/custom_element';

const jadwalSholatElement = document.createElement('jadwal-sholat');

const appElement = document.getElementById('app');
appElement.appendChild(jadwalSholatElement);