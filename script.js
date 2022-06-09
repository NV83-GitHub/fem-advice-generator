const URL = "https://api.adviceslip.com/advice"

// fonction asynchrone pour fetcher et parser les datas de l'api
const loadData = async () => {
    let res = await fetch(URL)
    let data = await res.json()
    document.getElementById("advice-id").innerHTML= `
    <h3>ADVICE # ${data.slip.id}</h3>
    `
    document.getElementById("advice-html").innerHTML = `
        <p>"${data.slip.advice}"</p>
    `
}

loadData()