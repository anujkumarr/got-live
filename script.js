// let btnSection = document.querySelector(".btn-section");

// let input = document.querySelector("input");


// let ul = document.querySelector(".ul")

// let allHouses = got.houses.reduce((acc, cv) => {
//   acc = acc.concat(cv)
//   return acc;
 
// }, []);

// let allPeople = got.houses.reduce((acc, cv) => {
//   acc = acc.concat(cv.people);
//   return acc;
// }, []);

// let houseName = got.houses.reduce((acc,houseName) =>{
//   acc = acc.concat(houseName.name);
//   return acc
// },[])

// houseName.forEach((eachName) => {
//   let btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.innerText = eachName;
//   btnSection.append(btn)
// });

// function createUiTwo(arr) {
//   ul.innerHTML = "";
//   arr.forEach((element) => {
//      let li = document.createElement("li");
//      li.classList.add("li");

//      let img = document.createElement("img");
//      img.src = element.image;

//      let h4 = document.createElement("h4");
//      h4.innerText = element.name;

//      let description = document.createElement("p");
//      description.innerText = element.description;

//      let btn = document.createElement("a");
//      btn.classList.add("btn2");
//      btn.innerText = "Know More!";
//      btn.href = element.wikiLink;

//      li.append(img, h4, description, btn);
//      ul.append(li);
//   });
// }
  

//   function createUI(element) {
//     let li = document.createElement("li");
//     li.classList.add("li");

//     let img = document.createElement("img");
//     img.src = element.image;

//     let h4 = document.createElement("h4");
//     h4.innerText = element.name;

//     let description = document.createElement("p");
//     description.innerText = element.description;

//     let btn = document.createElement("a");
//     btn.classList.add("btn2");
//     btn.innerText = "Know More!";
//     btn.href = element.wikiLink;

//     li.append(img, h4, description, btn);
//     ul.append(li);
//   }



// allPeople.forEach((elm) => {
//   createUI(elm);
// });

// btnSection.addEventListener("click", () => {
//   ul.innerText = "";
//   allHouses.forEach((elem) => {
//     if (event.target.innerText === "Starks") {
//       if (elem.name === "Starks") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Lannisters") {
//       if (elem.name === "Lannisters") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Baratheons") {
//       if (elem.name === "Baratheons") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Targaryens") {
//       if (elem.name === "Targaryens") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Greyjoys") {
//       if (elem.name === "Greyjoys") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Tyrells") {
//       if (elem.name === "Tyrells") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Tullys") {
//       if (elem.name === "Tullys") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Redwyne") {
//       if (elem.name === "Redwyne") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Freys") {
//       if (elem.name === "Freys") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Arryns") {
//       if (elem.name === "Arryns") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } else if (event.target.innerText === "Dothrakis") {
//       if (elem.name === "Dothrakis") {
//         elem.people.forEach((person) => {
//           createUI(person);
//         });
//       }
//     } 
//     });
// });


// input.addEventListener("input", (event) => {
//   let peopleName = allPeople.filter((people) => {
//     return people.name.toLowerCase().includes(event.target.value.toLowerCase());
//   });
//   createUiTwo(peopleName);
// })


let root = document.querySelector(".ul");

let rootTags = document.querySelector(".btn-section");

let search = document.querySelector("input");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allTags = got.houses.map((house) => house.name)

let activeHouse = "";

function createButtonUI(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = tag;

    btn.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse =
        got.houses.find((house) => house.name === tag).people || [];
      createCards(peopleOfTheHouse);
      createButtonUI(allTags);
    });


    if (activeHouse === tag) {
       btn.classList.add("active");
    }
   

    
    rootTags.append(btn); 
  })
}



function createCards(data = []) {
  root.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    li.classList.add("li");

    let img = document.createElement("img");
    img.src = people.image;

    let h4 = document.createElement("h4");
    h4.innerText = people.name;

    let description = document.createElement("p");
    description.innerText = people.description;

    let btn = document.createElement("a");
    btn.classList.add("btn2");
    btn.innerText = "Know More!";
    btn.href = people.wikiLink;

    li.append(img, h4, description, btn);
    root.append(li);
  });
}

function handleSearch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createCards(filteredPeople);
}

search.addEventListener("input", handleSearch)
createCards(allPeople);
createButtonUI(allTags);  