import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect,  } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled from 'styled-components';
import './App.css'
import BarLoader from "react-spinners/BarLoader";
import { useTranslation } from 'react-i18next'






function App() {


const [loading, setLoading] = useState(false);
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},1500)
},[])

const [isDarkMode, setIsDarkMode] = useState(
  () => localStorage.getItem('isDarkMode') === 'true' || false                                                                  
);

useEffect(() => {
  localStorage.setItem('isDarkMode', isDarkMode);                                                                   
}, [isDarkMode]);

const toggleMode = () => {
  setIsDarkMode((prevMode) => !prevMode);
};

const applyMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode', isDarkMode);
};

useEffect(() => {
  applyMode();                                                                  
}, [isDarkMode]);                                                                   

  const Header = styled.header`
  
  `;
  

  const Logo = styled.div`
  `;

  const NAV = styled.nav`
  `;

  const Ul = styled.ul`

  `;

  const Li =styled.li`
  `;
  const [lang, setLang] = useState('');
  const {t, i18n} = useTranslation();
  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'))
      i18n.changeLanguage(localStorage.getItem('lang'))
    } else {
      setLang('uz')
      i18n.changeLanguage(localStorage.getItem('uz'))
    }
  }, []);

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value);
  }
  
  return (
    <div className='card'>

<div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
          {
        loading?
        <BarLoader
        className='loader'
        color={'red'}
        loading={loading}
        height={10}
        width={300}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>
  
      
     <Header>

      <NAV>

      {/*<h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1> className='dark' onClick={toggleMode} */}
      <svg className='dark'  onClick={toggleMode} xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><defs><mask id="lineMdLightDarkLoop0"><circle cx="7.5" cy="7.5" r="5.5" fill="#fff"/><circle cx="7.5" cy="7.5" r="5.5"><animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11"/><animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5"/></circle></mask><mask id="lineMdLightDarkLoop1"><g fill="#fff"><circle cx="12" cy="9" r="5.5"><animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15"/></circle><g><g fill-opacity="0"><use href="#lineMdLightDarkLoop2" transform="rotate(-125 12 15)"/><use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"/><use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"/><use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"/><use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"/><set attributeName="fill-opacity" begin="1.5s" to="1"/></g><animateTransform attributeName="transform" dur="5s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"/></g></g><path d="M0 10h26v5h-26z"/><path fill="none" stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-linecap="round" stroke-width="2" d="M1 12h22"><animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 12h22;M2 12h22;M0 12h22"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;52"/></path></mask><symbol id="lineMdLightDarkLoop2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"/></path></symbol></defs><g fill="currentColor"><rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDarkLoop0)"/><path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"/></g></svg>
      {/* Rest of your components */}

        <Ul >
          <Li><a href='#AboutMe' to ="/" >{t('About')}</a></Li>
          <Li><a href='#Skills' to ="/skills" >{t('Skills')}</a></Li>
          <Li><a href='#Project' to ="/project" >{t('Project')}</a></Li>
          <Li><a href='#Contact' to ="/contact" >{t('Contact')}</a></Li>
          <select onChange={handleChangeLang} value={lang} className='transl'>
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
          <option value="ru">Rus-Tilli</option>
          </select>
        </Ul>
      </NAV>
     </Header>
     <div className='big-box'>
      <div className='container'>
       <h1 className='hed'>{t('hi')}      <svg width="65" height="65" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1666 22.7895C14.5194 21.1451 18.066 21.4605 20.1785 23.205L17.7557 19.6834C15.8059 16.9027 16.5042 13.8942 19.2874 11.9419C22.0707 9.99711 29.9574 15.2257 29.9574 15.2257C27.9901 12.4174 28.358 8.85828 31.1663 6.88848C33.9746 4.92619 37.8491 5.60448 39.8164 8.41776L65.8968 45.2607L62.5729 77.4858L34.8331 67.369L10.6374 31.4947C8.65254 28.6689 9.33834 24.7718 12.1666 22.7895Z" fill="#EF9645"/>
<path d="M6.74521 43.2857C6.74521 43.2857 3.91191 39.1559 8.04423 36.3251C12.1715 33.4943 15.0023 37.6216 15.0023 37.6216L28.1452 56.789C28.5982 56.0331 29.0938 55.2872 29.6469 54.5514L11.4057 27.9528C11.4057 27.9528 8.57485 23.8255 12.7047 20.9947C16.832 18.1639 19.6628 22.2912 19.6628 22.2912L36.8203 47.3129C37.4585 46.7923 38.1118 46.2692 38.7851 45.7561L18.8944 16.7448C18.8944 16.7448 16.0636 12.6174 20.1934 9.78664C24.3207 6.95584 27.1515 11.0832 27.1515 11.0832L47.0422 40.0895C47.7731 39.6415 48.4964 39.2535 49.2223 38.843L30.6306 11.7314C30.6306 11.7314 27.7998 7.6041 31.9271 4.7733C36.0544 1.94249 38.8852 6.06981 38.8852 6.06981L58.5431 34.7383L61.5316 39.0983C49.1472 47.5933 47.9683 63.5744 55.0441 73.8939C56.4582 75.9588 58.5231 74.5447 58.5231 74.5447C50.0307 62.1577 52.6237 48.239 65.0107 39.7466L61.3589 21.4703C61.3589 21.4703 59.9948 16.6547 64.808 15.2881C69.6236 13.924 70.9902 18.7396 70.9902 18.7396L75.2076 31.2642C76.8795 36.23 78.6591 41.1783 81.0144 45.8587C87.6646 59.0741 83.6925 75.4983 71.1529 84.1008C57.4744 93.4793 38.7751 89.9927 29.3941 76.3168L6.74521 43.2857Z" fill="#FFDC5D"/>
<path d="M30.0351 80.0934C20.0234 80.0934 9.90662 69.9766 9.90662 59.9649C9.90662 58.5808 8.89294 57.462 7.50882 57.462C6.12471 57.462 4.90078 58.5808 4.90078 59.9649C4.90078 74.9824 15.0176 85.0992 30.0351 85.0992C31.4192 85.0992 32.538 83.8753 32.538 82.4912C32.538 81.1071 31.4192 80.0934 30.0351 80.0934Z" fill="#5DADEC"/>
<path d="M17.5204 84.9942C10.0117 84.9942 5.00584 79.9884 5.00584 72.4796C5.00584 71.0955 3.88703 69.9767 2.50292 69.9767C1.11881 69.9767 0 71.0955 0 72.4796C0 82.4913 7.50876 90.0001 17.5204 90.0001C18.9046 90.0001 20.0234 88.8813 20.0234 87.4971C20.0234 86.113 18.9046 84.9942 17.5204 84.9942ZM60.0701 4.90078C58.6885 4.90078 57.5672 6.02209 57.5672 7.4037C57.5672 8.78531 58.6885 9.90662 60.0701 9.90662C70.0818 9.90662 80.0934 18.8896 80.0934 29.93C80.0934 31.3116 81.2148 32.4329 82.5964 32.4329C83.978 32.4329 85.0993 31.3116 85.0993 29.93C85.0993 16.1289 75.0876 4.90078 60.0701 4.90078Z" fill="#5DADEC"/>
<path d="M72.5847 0C71.2031 0 70.0818 1.01619 70.0818 2.3978C70.0818 3.77941 71.2031 5.00584 72.5847 5.00584C80.0935 5.00584 84.9942 10.5748 84.9942 17.4153C84.9942 18.7969 86.2181 19.9182 87.6022 19.9182C88.9863 19.9182 90 18.7969 90 17.4153C90 7.81161 82.5964 0 72.5847 0Z" fill="#5DADEC"/>
</svg>
,<br />
{t('he')}<br />
{t('hu')}</h1>
<p>{t('pe')}</p>
   <button className='hire'>{t('Hire')}</button>
   <button className='see'>{t('Se')}</button>
      </div>

        <img className='negr' src="./Group 1 (2).png" alt="" />   
      
     </div>
     </div>}

     <Routes>
     <Route path='/' element = {<Home></Home>}/>
     <Route path='/about' element = {<About></About>}/>
     <Route path='/contact' element = {<Contact></Contact>}/>

     </Routes>
     </div>
    </div>
  )
}

export default App
