//ReactDOM.render(<p>repeating helps with learning!</p>, document.querySelector("#root"))
//ReactDOM.render(<p>i need some, water!</p>, document.getElementById("root"))
//ReactDOM.render(<h1>hello, baby!</h1>, document.querySelector("#root"))

//ReactDOM.render(<h2>hi, there!</h2>, document.querySelector("#root"))
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

//ReactDOM.render(<ul><li>child</li><li>MOM</li></ul>,document.getElementById("root"))

//function maincontent() {
    //return (
        //<h1>started react today!</h1>
    //)
//}

//ReactDOM.render(
    //<div>
        //<Navbar />
        //<MainContent />
    //</div>,
    //document.getElementById("root")
//)

//let welcomeEl = document.getElementById("welcome-el")
//let name = " damilola"
//let greeting = "welcome back"

//welcomeEl.innerText = greeting + name

//welcomeEl.innerText += "👋"

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
//console.log(countEl)
let count = 0
function increment() {
    count  += 1
    countEl.textContent = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    //console.log(count)
    countEl.textContent = 0
    count = 0
}
