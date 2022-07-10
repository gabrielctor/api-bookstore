import livros from "../models/Livro.js"

class bookController {
    static listBooks = (req, res) => {
        livros.find()
            .populate(["autor", "editora"])
            .exec((err, livros) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Não foi possível localizar.`})
                } else {
                    res.status(200).send(livros)
                }
            })
    }
    static registerBooks = (req, res) => {
        let livro = new livros(req.body)
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível registrar.`})
            } else {
                res.status(201).send({message: 'Livro registrado com sucesso.'})
            }
        })
    }
    static updateBooks = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível atualizar.`})
            } else {
                res.status(200).send({message: 'Livro atualizado com sucesso.'})
            }
        })
    }
    static listBooksById = (req, res) => {
        const id = req.params.id
        livros.findById(id)
            .populate(["autor", "editora"])
            .exec((err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Não foi possível localizar.`})
            } else {
                res.status(200).send(livros)
            }
            })
    }
    static deleteBooks = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível remover.`})
            } else {
                res.status(200).send({message: 'Livro removido com sucesso.'})
            }
        })
    }
    static listBooksByPublisher = (req, res) => {
        const publisher = req.query.editora
        livros.find({'editora': publisher}, {}, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Não foi possível localizar.`})
            } else {
                res.status(200).send(livros)
            }
        })
    }
}

export default bookController