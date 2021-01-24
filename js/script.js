const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1:

const cat = {
    complain: function(){
        console.log("Meow");
    }
}

//Question 2:

const heading = document.querySelector("h3");

heading.innerHTML="Updated heading";


//Question 3:

heading.style.fontSize= "2em";

//Question 4:

heading.classList.add("subheading");

//Question 5:

const paragraphs = document.querySelectorAll("p");

for(i=0; i<paragraphs.length; i++){
    paragraphs[i].style.color="red";
}



//Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML="<p>"+"New paragraph"+"</p>";
resultsContainer.style.backgroundColor="yellow";


//Question 7:

function logList(list){
    for(i=0; i<list.length; i++){
        console.log(list[i].name);
    }
}

logList(cats);


//Question 8

function createCats(cats){

    let HTML = "" ; 

    for(i=0; i<cats.length; i++){

        if (cats[i].age == undefined){
            cats[i].age="Age unknown";
        }

        HTML +=   "<div>" + "<h5>" + cats[i].name+ "</h5>" +"<p>" + cats[i].age + "</p>" + "</div>";
       
    }

    return HTML;
}

createCats(cats);

const catContainer= document.querySelector(".cat-container");
catContainer.innerHTML= createCats(cats);
