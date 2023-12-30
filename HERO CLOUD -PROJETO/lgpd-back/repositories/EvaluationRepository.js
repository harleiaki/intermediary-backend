import Evaluation from "../models/Evaluation.js"

const saveEvaluation = async (EvaluationModel) => {
    const save = await Evaluation.create(EvaluationModel);
    return save;
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    }
    );
};

const getEvaluationsById = async (id) => {
    return await Evaluation.findByPk(id);
};

const deleteEvaluationsById = async (id) => {
    return await Evaluation.destroy({ where: { id } });
};

const updateEvaluationById = async (id, EvaluationModel) => {
    try {
        const result = await Evaluation.update(EvaluationModel, {where: { id: id }});
        if (result[0] === 1) {
            return { message: "evaluation update with success" };
        } else {
            return { message: "can not find ${id} to update ", status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationsById,
    deleteEvaluationsById,
    updateEvaluationById
}

export default factory;