const database = require('../database/connection')

class answerControoler {
    newAnswer(request,response){
        const{respostas} = request.body
        console.log(respostas)

        database.insert({respostas}).table("respostas").then(data=>{
            console.log(data)
            response.json({message:"Resposta salva com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })

    }
    questions(request, response){
        database.select("*").table("perguntas").then(perguntas=>{
            console.log(perguntas)
            response.json(perguntas)
        }).catch(error=>{
            console.log(error)
        })
    }
    listQuestion(request, response){
        const id = request.params.id
        database.select("*").table("perguntas").where({id:id}).then(resposta=>{
            response.json(resposta)
        }).catch(error=>{
            console.log(error)
        })
    }
}
module.exports = new answerControoler()