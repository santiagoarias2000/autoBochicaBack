import { SQL_COURSE_VIEW } from './../../repo/courses/sql_toList';
import { Request } from 'express';
import { Response } from 'express';
import CourseToList from '../../dao/courses/ToList';


class CourseControllerGet extends CourseToList{
    public getMeCourse(req: Request, res: Response): void{
        CourseControllerGet.getCourse(SQL_COURSE_VIEW.VIEW,[],res);
    }
}
const courseControllerGet = new CourseControllerGet();
export default courseControllerGet;