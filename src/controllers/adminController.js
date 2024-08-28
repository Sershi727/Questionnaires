const Survey = require('../models/survey');

exports.createSurvey = async (req, res) => {
  try {
    const surveyData = req.body;
    const survey = await Survey.create(surveyData);
    res.status(201).json(survey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const surveyData = req.body;
    const survey = await Survey.update(surveyData, { where: { id } });
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
