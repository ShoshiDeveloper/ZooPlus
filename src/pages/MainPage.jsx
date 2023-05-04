import React from 'react';
import './styles/MainPage.css'
import actual from '../assets/actual.png';
import easytouse from '../assets/easy-to-use.png';
import fact from '../assets/fact.png';
import { Advantage } from '../components';
import Header from '../components/header/Header';

const MainPage = () => {
  return (
    <div>
      <div className="headerBlock">
        <Header main={true} />
        <div className="importantWords">
          <p className='heading'>Будь ответственным владельцем!</p>
          <p className='subtitle'>Мы в ответе за тех кого приручили, поэтому не будьте эгоистами и не забывайте о здоровье своих питомцев, им тоже нужен доктор.</p>
        </div>
      </div>
      <div className="WhyUs">
        <h2>Почему мы?</h2>
        <div className="advantagesCollection">
          <Advantage logo={actual} heading="Актуальное"
            subtitle="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
          <Advantage logo={easytouse} heading="Полезность"
            subtitle="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
          <Advantage logo={fact} heading="Факты"
            subtitle="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
          <Advantage logo={fact} heading="Факты"
            subtitle="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
        </div>
      </div>
      <div className="questions">
        <h2>Часто задаваемые вопросы</h2>
        <div className="question">
          <div className="header">
            <p>Почему собак важно прививать?</p>
          </div>
          <p>Потому что надо.</p>
        </div>

        <div className="question">
          <div className="header">
            <p>Какой-то вопрос</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

      </div>
      <div className="footer">
        <p>copyright by ZooPlus. 2023</p>
      </div>
    </div>
  );
}

export default MainPage;
