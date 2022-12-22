import authors from '../models/Author.js';

class authorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static registerAuthors = (req, res) => {
    const author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível registrar.` });
      } else {
        res.status(201).send({ message: 'Autor registrado com sucesso.' });
      }
    });
  };

  static updateAuthors = (req, res) => {
    const { id } = req.params;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível atualizar.` });
      } else {
        res.status(200).send({ message: 'Autor atualizado com sucesso.' });
      }
    });
  };

  static listAuthorsById = (req, res) => {
    const { id } = req.params;
    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static deleteAuthors = (req, res) => {
    const { id } = req.params;
    authors.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível remover.` });
      } else {
        res.status(200).send({ message: 'Autor removido com sucesso.' });
      }
    });
  };
}

export default authorController;
