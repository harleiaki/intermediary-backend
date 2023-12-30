import Teacher from "../models/Teacher.js"

const saveTeacher = async (TeacherModel) => {
    const save = await Teacher.create(TeacherModel);
    return save;
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    }
    );
};

const getTeachersById = async (id) => {
    return await Teacher.findByPk(id);
};

const deleteTeachersById = async (id) => {
    return await Teacher.destroy({ where: { id } });
};

const updateTeacherById = async (id, TeacherModel) => {
    try {
        const result = await Teacher.update(TeacherModel, {where: { id: id }});
        if (result[0] === 1) {
            return { message: "teacher update with success" };
        } else {
            return { message: "can not find ${id} to update ", status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeachersById,
    deleteTeachersById,
    updateTeacherById
}

export default factory;