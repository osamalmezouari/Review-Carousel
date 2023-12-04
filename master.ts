
const img1 = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img3 = "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


const rightSwitch = document.getElementById('right') as HTMLButtonElement;
const leftSwitch = document.getElementById('left') as HTMLButtonElement;
const randomSwitch = document.getElementById("random") as HTMLButtonElement

const nameElement = document.getElementById("name") as HTMLDivElement
const imageElement = document.getElementById("img") as HTMLHeadingElement
const jobElement = document.getElementById("jobTitle") as HTMLHeadingElement
const textElement = document.getElementById("text") as HTMLParagraphElement

interface people {
    name: string,
    jobTitle: string,
    img: string,
    text: string
}

interface peoples extends Array<people> { }


const persons: peoples = [
    {
        name: "Anna Johnson",
        jobTitle: "web designer",
        img: img1,
        text: "Helvetica artisan kinfolk thunderclaps lumbersexual blue bottle. Disrupt glossier gastropod deep v vice franz hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        name: "Adi Berta",
        jobTitle: "Front End",
        img: img2,
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jambing swag."
    },
    {
        name: "Ben Ty",
        jobTitle: "Back End",
        img: img3,
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
    
]
let counter = 0;
function userSwitcher<G>(direction: G): void {
    function getPerson(id: number): void {
        const { name, jobTitle, img, text } = persons[id]
        nameElement.textContent = `${name}`
        imageElement.style.backgroundImage = `url(${img})`
        jobElement.textContent = `${jobTitle}`
        textElement.textContent = `${text}`
    }
    if (direction === "left") {
        if (counter >= persons.length) {
            counter = 0
        }
        else {
            counter = counter + 1
        }
        getPerson(counter)
    }
    else if (direction === "right") {
        if (counter === 0) {
            counter = 2
        }
        else {
            counter = counter - 1
        }
        getPerson(counter)
    }
    else {
        const randomNumber: number = Math.floor(Math.random() * persons.length)
        getPerson(randomNumber)
    }
}

rightSwitch.onclick = () => userSwitcher<string>("right")
leftSwitch.onclick = () => userSwitcher<string>("left")
randomSwitch.onclick = () => userSwitcher<string>("random")
