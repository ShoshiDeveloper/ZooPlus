import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/ChoiceAnimalPage.css';
import TypeButton from './buttons/TypeOfAnimalButton';


import dog from '../assets/type_of_animal_icons/dog.png';
import cat from '../assets/type_of_animal_icons/cat.png';
import dove from '../assets/type_of_animal_icons/dove.png';
import reptile from '../assets/type_of_animal_icons/reptile.png';
import { useEffect } from 'react';

import jsonData from '../assets/animals.json';
import BreedButton from './buttons/BreedOfAnimalButton';
import Header from '../components/header/Header';

const ChoiceAnimalPage = () => {
  const [checkedType, setCheckedType] = useState("none");
  const [types, setTypes] = useState(
    [{
      type: "Кошачьи",
      image: cat,
      text: "Кошки",
      checked: false
    }, {
      type: "Собаки",
      image: dog,
      text: "Собаки",
      checked: false
    }, {
      type: "Птицы",
      image: dove,
      text: "Птицы",
      checked: false
    }, {
      type: "Рептилии",
      image: reptile,
      text: "Рептилии",
      checked: false
    }]
  );
  const [breeds, setBreeds] = useState([
    {
      type: "cat",
      breed: "siamskaya",
      image: cat,
      text: "Сиамская",
      checked: false
    }, {
      type: "cat",
      breed: "sfinks",
      image: cat,
      text: "Сфинкс",
      checked: false
    }, {
      type: "cat",
      breed: "abisinskaya",
      image: cat,
      text: "Абиссинская",
      checked: false
    }, {
      type: "cat",
      breed: "regdoll",
      image: cat,
      text: "Рэгдолл",
      checked: false
    }, {
      type: "cat",
      breed: "persid",
      image: cat,
      text: "Персидская",
      checked: false
    }, {
      type: "cat",
      breed: "meynkun",
      image: cat,
      text: "Мейн-кун",
      checked: false
    }, {
      type: "dog",
      breed: "shpic",
      image: dog,
      text: "Шпиц",
      checked: false
    }, {
      type: "dog",
      breed: "retveyler",
      image: dog,
      text: "Ретвейлер",
      checked: false
    },
  ]);


  // useEffect(() => {
  //     // console.log(jsonData);
  //     const newBreeds = [...breeds];
  //     jsonData.forEach(element => {
  //         console.log(element);
  //     });
  // });
  const typeChange = (index) => {
    const newTypes = [...types];
    newTypes.forEach(element => {
      element.checked = false;
    });
    newTypes[index].checked = true;
    setCheckedType(newTypes[index].type);

    setBreeds(jsonData);
    console.log(breeds);
    // jsonData.map(element => {
    //     console.log(element);
    //     setBreeds(newBreeds => [...breeds, {
    //         type: element.type,
    //         breed: element.breed,
    //         image: element.image,
    //         text: element.text,
    //         checked: false
    //     }]);
    // });
    // setBreeds(...breeds, jsonData);
    // jsonData.forEach(element => {
    //     console.log(element);
    //     if (element.type == newTypes[index].type) { 
    //         // newBreeds = [...breeds, {
    //         //     type: element.type,
    //         //     breed: element.breed,
    //         //     image: element.image,
    //         //     text: element.text,
    //         //     checked: false
    //         // }];
    //           setBreeds(newBreeds => [...breeds, {
    //               type: element.type,
    //               breed: element.breed,
    //               image: element.image,
    //               text: element.text,
    //               checked: false
    //           }]);
    //     }
    //     // setBreeds(newBreeds);
    // });
    setTypes(newTypes);
  }

  const breedChange = (index) => {
    const newBreeds = [...breeds];
    newBreeds.forEach(element => {
      element.checked = false;
    });
    newBreeds[index].checked = true;
    setBreeds(newBreeds);
  }

  return (
    <div>
      <Header main={false} />
      <div className="type_of_animal">
        <h2>Вид животного</h2>
        <div className="type_list">
          {
            types.map((Types, index) => {
              return <TypeButton checked={Types.checked} type={Types.type} image={Types.image} text={Types.text} click={() => {
                typeChange(index);
              }} />
            })
          }
        </div>
      </div>
      <div className="breed_of_animal">
        <h2>Порода животного</h2>
        <div className="type_list">
          {
            breeds.map((Breeds, index) => {
              if (Breeds.type == checkedType) {
                return <BreedButton checked={Breeds.checked} type={Breeds.type} image={Breeds.image} text={Breeds.text} id={Breeds.breed} />
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ChoiceAnimalPage;
