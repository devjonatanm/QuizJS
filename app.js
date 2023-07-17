
// colocar pontuação, css

const div = document.querySelector('div.perguntas')


// colocar filmes
// Os Oito Odiados 2015 ‧ Faroeste/Drama ‧ 3h 7m


const quiz = [
    {
        pergunta: 'Um aplicativo construído em linguagens da web, tais como HTML, CSS e Javascript é um aplicativo:',
        resposta: ['Original.', 'Híbrido.', 'Padrão.', 'Nativo.', 'Teste1', 'Teste2'],
        correta: 'Híbrido.'
    },
    {
        pergunta: 'O Ajax utiliza algumas tecnologias bastante conhecidas com o objetivo de melhorar a interatividade entre o usuário e o servidor. A tecnologia utilizada pelo Ajax que, na verdade, é um objeto JavaScript que torna possível a comunicação assíncrona com o servidor, sem a necessidade de recarregar a página por completo, é:',
        resposta: ['CSS', 'XML', 'DOM', 'XMLHttpRequest', 'Teste1', 'Teste2'],
        correta: 'XMLHttpRequest'
    },
    {
        pergunta: 'JavaScript is a _____ Side Scripting Language.',
        resposta: ['Server', 'Browser', 'ISP', 'None of the above', 'Teste1', 'Teste2'],
        correta: 'Browser'
    },
    {
        pergunta: 'o código JavaScript é escrito dentro do arquivo com extensão',
        resposta: ['.jvs', '.js', '.jsc', '.javascript', 'Teste1', 'Teste2'],
        correta: '.js'
    },
    {
        pergunta: 'Local Browser used for validations on the Web Pages uses',
        resposta: ['JS', 'Java', 'HTML', 'CSS', 'Teste1', 'Teste2'],
        correta: 'JS'
    }
]

let count = 0
let pontos = 0

document.querySelector('#iniciar').addEventListener('click', event => {

    if (document.querySelector('button').getAttribute('id') === 'voltar') {
        location.reload()
    }

    // verifica se input selecionado é o mesmo da resposta correta
    for (let i = 0; i < 6; i++) {
        if (document.querySelector('button').getAttribute('id') === 'next' && quiz.length >= count) {
            if (document.querySelectorAll('input')[i].checked === true && document.querySelectorAll('p')[i].textContent === quiz[count - 1].correta) {
                pontos++
                console.log(pontos)
            }
        }
    }
    div.innerHTML = ''

    // EMBARALHA ARRAY
    const embaralha = array => {
        array.sort(() => Math.random() - 0.5)
    }
    for(let i=0;i<quiz.length;i++){
        embaralha(quiz[i].resposta)
    }

    if (quiz.length > count) {
        div.innerHTML = `
        <h3>${count + 1}/${quiz.length} ${quiz[count].pergunta}</h3>
        <p><input type="radio"" name="p" id="A">${quiz[count].resposta[0]}</p>
        <p><input type="radio"" name="p" id="B">${quiz[count].resposta[1]}</p>
        <p><input type="radio"" name="p" id="C">${quiz[count].resposta[2]}</p>
        <p><input type="radio"" name="p" id="D">${quiz[count].resposta[3]}</p>
        <p><input type="radio"" name="p" id="E">${quiz[count].resposta[4]}</p>
        <p><input type="radio"" name="p" id="F">${quiz[count].resposta[5]}</p>`
    } else {
        div.innerHTML = `
        <p>FINALIZADO VOCE ACERTOU ${pontos}</p>`

        document.querySelector('#next').setAttribute("id", "voltar")
        document.querySelector('button').textContent = 'Voltar'
    }

    if (document.querySelector('button').getAttribute('id') === 'iniciar' && quiz.length > count) {
        document.querySelector('#iniciar').setAttribute("id", "next")
        document.querySelector('button').textContent = 'Next'
    }

    count++
})
