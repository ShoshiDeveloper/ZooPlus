import React, { useState } from 'react';
import './styles/AboutAnimal.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import jsonData from '../assets/animals.json';
import jsonDiseases from '../assets/diseases.json';
import cat from '../assets/type_of_animal_icons/cat.png';
import Header from '../components/header/Header';

const AboutAnimal = () => {
  const [facts, setFacts] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [checkedDiseas, setCheckedDiseas] = useState("none");
  const [diseas, setDiseas] = useState({ "description": "" });
  const [vaccinations_description, setVaccinationsDescription] = useState("");
  const [vaccinations, setVaccinations] = useState([]);
  const [aboutanimal, setAboutAnimal] = useState({});

  let params = useParams();

  useEffect(() => {
    jsonData.forEach(element => {
      if (element.breed == params.animalID) {
        setFacts(element.interesting_facts);
        setDiseases(element.diseases);
        setVaccinations(element.vaccinations);
        setVaccinationsDescription(element.vaccinations_description);
        setAboutAnimal({
          "breed": element.text,
          "type": element.type,
          "description": element.description
        });
      }
    });
  })

  const changeOpenedDiseas = (index) => {
    setCheckedDiseas(diseases[index]);
    setDiseas(jsonDiseases[diseases[index]]);
    // jsonDiseases.forEach(element => {
    //     if (element.name == checkedDiseas) {
    //         setDiseas(element);
    //     }
    // });
  }

  return (
    <div>
      <header>
        <Header main={true} />
        <div className="about_animal">
          <div className="cat_picture">
            <img src={cat} alt="cat picture" />
          </div>
          <div className="about">
            <h1>{aboutanimal.breed}</h1>
            <h3>{aboutanimal.type}</h3>
            <p>{aboutanimal.description}</p>
          </div>
        </div>
      </header>
      <main>
        <div className="interesting_facts">
          <h2>Интересные факты</h2>
          <ul>
            {
              facts.map((Fact, index) => {
                return <li>{Fact}</li>
              })
            }
          </ul>
        </div>
        <div className="diseases">
          <h2>Болезни</h2>
          <div className="diseases_list">
            {
              diseases.map((Diseas, index) => {
                if (Diseas == checkedDiseas) {
                  return <div className="diseas_button_active" onClick={() => {
                    changeOpenedDiseas(index);
                  }}>
                    <p>{Diseas}</p>
                  </div>
                } else {
                  return <div className="diseas_button" onClick={() => {
                    changeOpenedDiseas(index);
                  }}>
                    <p>{Diseas}</p>
                  </div>

                }
              })
            }
          </div>
          {
            checkedDiseas != "none" ? (
              <div>
                <div className="about_diseas">
                  <p>{diseas.description}</p>
                </div>
                <p className='sb'>Симптомы:</p>
                <ul>
                  {
                    diseas.symptoms.map((Symptom, index) => {
                      return <li>{Symptom}</li>
                    })
                  }
                </ul>
                <p className='sb'>Диагностика:</p>
                <ul>
                  {
                    diseas.diagnosis.map((Diagnos, index) => {
                      return <li>{Diagnos}</li>
                    })
                  }
                </ul>
              </div>
            ) : <div className=""></div>
          }
        </div>
        <div className="vaccinations">
          <h2>Какие есть прививки</h2>
          <div className="about_diseas">
            <p>{vaccinations_description}</p>
          </div>
          <ul>
            {
              vaccinations.map((Vaccin, index) => {
                return <li>{Vaccin}</li>
              })
            }
          </ul>

        </div>
      </main>
    </div>
  );
}

export default AboutAnimal;
