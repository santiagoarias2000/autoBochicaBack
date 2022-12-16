import { Router } from 'express';
import courseControllerGet from '../controller/course/ToListController';

class CoursesRoutes{
    public routesApiCourse: Router;
    constructor(){
        this.routesApiCourse = Router();
        this.setting();
    }
    public setting(){
        this.routesApiCourse.get("/view", courseControllerGet.getMeCourse);
    }
}
const coursesRoutes = new CoursesRoutes();
export default coursesRoutes.routesApiCourse;