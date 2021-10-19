

/**
 * name - string 
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number; // Optional attribute
    educator: string;
 }

//  Example
//
//  class CreateCourseService {
//  
//      execute(data: Course){
//          console.log(data.name, data.duration, data.educator);
//      }
//  }

class CreateCourseService {

    execute({duration = 8, educator, name}: Course){
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();