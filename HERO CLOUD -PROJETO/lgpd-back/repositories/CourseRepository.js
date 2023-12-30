import Course from "../models/Course.js"

const saveCourse = async (CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
}

const getAllCourses = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    }
    );
};

const getCoursesById = async (id) => {
    return await Course.findByPk(id);
};

const deleteCoursesById = async (id) => {
    return await Course.destroy({ where: { id } });
};

const updateCourseById = async (id, CourseModel) => {
    try {
        const result = await Course.update(CourseModel, {where: { id: id }});
        if (result[0] === 1) {
            return { message: "course update with success" };
        } else {
            return { message: "can not find ${id} to update ", status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveCourse,
    getAllCourses,
    getCoursesById,
    deleteCoursesById,
    updateCourseById
}

export default factory;