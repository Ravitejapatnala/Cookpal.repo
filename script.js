const nonveg= document.querySelectorAll(".nonveg");
const veg= document.querySelectorAll(".veg");
const allrecipes= document.querySelectorAll(".card");
const below= document.querySelectorAll(".below4");
const above= document.querySelectorAll(".above4");
const likeButton= document.querySelectorAll(".like-unlike");
const menuIcon= document.querySelector(".menu-icon");
const navList= document.querySelector(".header");

function onlyVegRecipes(){
    veg.forEach(function(veg)
    {
        if(veg.classList.contains("hide"))
        {
            veg.classList.remove("hide");
        }
    })
    nonveg.forEach(function(nonveg)
    {
        nonveg.classList.toggle("hide");
    })
}

function onlyNonVegRecipes(){
    nonveg.forEach(function(nonveg)
    {
        if(nonveg.classList.contains("hide"))
        {
            nonveg.classList.remove("hide");
        }
    })
    veg.forEach(function(veg)
    {
       veg.classList.toggle("hide");
    })
}

function allRecipes(){
    allrecipes.forEach(function(allrecipes)
    {
        allrecipes.classList.remove("hide");
    })
}

function above4(){
    above.forEach(function(above){
        if(above.classList.contains("hide"))
        {
            above.classList.remove("hide");
        }
    })
    below.forEach(function(below)
    {
        below.classList.toggle("hide");
    })
}

function below4(){
    below.forEach(function(below){
        if(below.classList.contains("hide"))
        {
            below.classList.remove("hide");
        }
    })
    above.forEach(function(above)
    {
        above.classList.toggle("hide");
    })
}

likeButton.forEach(element => {
    element.addEventListener("click", function()
    {
        this.classList.toggle("favourite");
    })
})

menuIcon.addEventListener("click", ()=>{
    navList.classList.toggle("show");
})