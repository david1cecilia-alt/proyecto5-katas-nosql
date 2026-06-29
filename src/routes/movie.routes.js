const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model'); 

// 1. OBTENER TODAS LAS PELÍCULAS (Read)
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las películas', error });
  }
});

// 2. CREAR NUEVA PELÍCULA (Post)
router.post('/', async (req, res) => {
  try {
    const nuevaMovie = new Movie(req.body);
    const movieGuardada = await nuevaMovie.save();
    res.status(201).json(movieGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la película', error });
  }
});

// 3. MODIFICAR UNA PELÍCULA (Put)
router.put('/:id', async (req, res) => {
  try {
    const movieActualizada = await Movie.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!movieActualizada) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json(movieActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al modificar la película', error });
  }
});

// 4. ELIMINAR UNA PELÍCULA (Delete)
router.delete('/:id', async (req, res) => {
  try {
    const movieEliminada = await Movie.findByIdAndDelete(req.params.id);
    if (!movieEliminada) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json({ mensaje: 'Película eliminada correctamente', movieEliminada });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la película', error });
  }
});

module.exports = router;
