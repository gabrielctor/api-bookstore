import editoras from '../models/Editora.js';

class publisherController {
  static listPublishers = (req, res) => {
    editoras.find((err, editoras) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(editoras);
      }
    });
  };

  static registerPublishers = (req, res) => {
    const editora = new editoras(req.body);
    editora.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível registrar.` });
      } else {
        res.status(201).send({ message: 'Editora registrada com sucesso.' });
      }
    });
  };

  static updatePublishers = (req, res) => {
    const { id } = req.params;
    editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível atualizar.` });
      } else {
        res.status(200).send({ message: 'Editora atualizada com sucesso.' });
      }
    });
  };

  static listPublishersById = (req, res) => {
    const { id } = req.params;
    editoras.findById(id, (err, editoras) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(editoras);
      }
    });
  };

  static deletePublishers = (req, res) => {
    const { id } = req.params;
    editoras.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível remover.` });
      } else {
        res.status(200).send({ message: 'Editora removida com sucesso.' });
      }
    });
  };
}

export default publisherController;
