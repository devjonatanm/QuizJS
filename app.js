
// colocar pontuação, css

const div = document.querySelector('div.perguntas')

document.querySelector('#iniciar').addEventListener('click', event => {
    if (document.querySelector('button').getAttribute('id') === 'next') {
        if(document.querySelectorAll('input')[0].checked === true){
            console.log('acertou!')
        }else{
            console.log('errou!')
        }
    }

    div.innerHTML = ''
    div.innerHTML = `
        <h3>How do you write "Hello World" in an alert box?</h3>
        <p><input type="radio"" name="p" id="p1"> alert("Hello World")</p>
        <p><input type="radio"" name="p" id="p2"> msgBox("Hello World")</p>
        <p><input type="radio"" name="p" id="p3"> msg("Hello World")</p>
        <p><input type="radio"" name="p" id="p4"> alertBox("Hello World")</p>
        
    `
    if (document.querySelector('button').getAttribute('id') === 'iniciar') {
        document.querySelector('#iniciar').setAttribute("id", "next")
        document.querySelector('button').textContent = 'Next'
    }

    

})
