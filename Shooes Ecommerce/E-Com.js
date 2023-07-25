const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const product = [
    {
        id:1,
        title:"AIR FORCE",
        price:299,
        color:[
            {
                code:"black",
                img:"./img/air.png",
            },
            {
                code:"darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"AIR JORDAN",
        price:249,
        color:[
            {
                code:"rebeccapurple",
                img:"./img/jordan.png",
            },
            {
                code:"Orange",
                img:"./img/jordan2.png",
            },
        ],  
    },
    {
        id:3,
        title:"AIR BLAZER",
        price:199,
        color:[
            {
                code:"lightred",
                img:"./img/blazer.png",
            },
            {
                code:"darkred",
                img:"./img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"AIR CRATER",
        price:129,
        color:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"cornflowerblue",
                img:"./img/hippie2.png",
            },
        ],
    },
    {
        id:1,
        title:"AIR HIPPIE",
        price: 149,
        color:[
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
                code:"black",
                img:"./img/hippie2.png",
            },
        ],
    },
];

let chooseProduct = product[0]

const currentProductImg = document.querySelector(".productImg")
const currentTitle = document.querySelector(".productTitle")
const currentPrice = document.querySelector(".productPrice")
const currentProductSize = document.querySelectorAll(".size")
const currentColor = document.querySelectorAll(".color")


menuItems.forEach((item, index) => {
    item.addEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;


        chooseProduct =product[index]

        currentTitle.textContent = chooseProduct.title
        currentPrice.textContent = "$" +chooseProduct.price
        currentProductImg.src = chooseProduct.color[0].img

        currentColor.forEach((color,index) =>{
            color.style.backgroundColor = chooseProduct.color[index].code;
        }) 
    });
});



currentColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = chooseProduct.color[index].img
    })
})


currentProductSize.forEach((size,index0)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const Close = document.querySelector(".close")


productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})

Close.addEventListener("click",()=>{
    payment.style.display = "none"
})