import "./CourseList.css";

interface Course {
  id: number;
  title: string;
  duration: string;
  description: string;
}

interface CourseListProps {
  courseList: Course[];
}

const CourseList = (props: CourseListProps) => {
  // Conditional Rendering
  if (props.courseList.length == 0) {
    return (
      <div>
        <h2 className="text-danger">Course List</h2>
        <h6 className="text-primary">No Course available</h6>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-danger">Course List</h2>
      <ul className="list-group">
        {props.courseList.map((course) => (
          <li className="list-group-item" key={course.id}>
            {course.title} - {course.duration} <br />
            <span className="small text-danger">{course.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
