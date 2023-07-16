
// colocar pontuação, css

const div = document.querySelector('div.perguntas')

const quiz = [
    {
        pergunta: 'Um aplicativo construído em linguagens da web, tais como HTML, CSS e Javascript é um aplicativo:',
        resposta: ['Original.', 'Híbrido.', 'Padrão.', 'Nativo.'],
        correta: 'p2'
    },
    {
        pergunta: 'O Ajax utiliza algumas tecnologias bastante conhecidas com o objetivo de melhorar a interatividade entre o usuário e o servidor. A tecnologia utilizada pelo Ajax que, na verdade, é um objeto JavaScript que torna possível a comunicação assíncrona com o servidor, sem a necessidade de recarregar a página por completo, é:',
        resposta: ['CSS', 'XML', 'DOM', 'XMLHttpRequest'],
        correta: 'p4'
    },
    {
        pergunta: 'JavaScript is a _____ Side Scripting Language.',
        resposta: ['Server', 'Browser', 'ISP', 'None of the above'],
        correta: 'p2'
    },
    {
        pergunta: 'o código JavaScript é escrito dentro do arquivo com extensão',
        resposta: ['.jvs', ' .js', '.jsc', '.javascript'],
        correta: 'p2'
    },
    {
        pergunta: 'Local Browser used for validations on the Web Pages uses',
        resposta: ['JS', 'Java', 'HTML', 'CSS'],
        correta: 'p1'
    }
]

let count = 0
let pontos = 0

document.querySelector('#iniciar').addEventListener('click', event => {

    for (let i = 0; i < 4; i++) {
        if (document.querySelector('button').getAttribute('id') === 'next' && quiz.length >= count) {
            if (document.querySelectorAll('input')[i].checked === true && document.querySelectorAll('input')[i].getAttribute('id') === quiz[count - 1].correta) {
                pontos++
            }
        }
    }

    div.innerHTML = ''

    if (quiz.length > count) {
        div.innerHTML = `
        <h3>${count+1}/${quiz.length} ${quiz[count].pergunta}</h3>
        <p><input type="radio"" name="p" id="p1"> ${quiz[count].resposta[0]}</p>
        <p><input type="radio"" name="p" id="p2"> ${quiz[count].resposta[1]}</p>
        <p><input type="radio"" name="p" id="p3"> ${quiz[count].resposta[2]}</p>
        <p><input type="radio"" name="p" id="p4"> ${quiz[count].resposta[3]}</p>
        `
    } else {
        div.innerHTML = `
        <p>FINALIZADO VOCE ACERTOU ${pontos}</p>
        `
    }

    if (document.querySelector('button').getAttribute('id') === 'iniciar' && quiz.length > count) {
        document.querySelector('#iniciar').setAttribute("id", "next")
        document.querySelector('button').textContent = 'Next'
    }


    count++
})
