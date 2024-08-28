const Survey = require('../models/survey');

exports.getSurveyResults = async (req, res) => {
  try {
    const surveys = await Survey.findAll();
    // Анализ данных и отправка результатов
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
