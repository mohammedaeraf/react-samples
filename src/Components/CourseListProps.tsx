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

/*
Explanation
The provided code is a snippet from a React functional component written in TypeScript, named CourseList. This component is designed to display a list of courses passed to it via props.

The component returns a JSX structure that includes a div element containing a h2 element and an unordered list (ul). The h2 element has a class name of text-danger, which likely applies some styling to make the text appear in a red color, and it displays the title "Course List".

The unordered list (ul) has a class name of list-group, which suggests that it is styled using Bootstrap or a similar CSS framework to create a styled list group. Inside the ul element, the component maps over the courseList array provided via props. For each course in the array, it creates a list item (li) with the class name list-group-item, which applies additional styling to each list item.

Each list item displays the course's title and duration, followed by a line break (<br />). Below the line break, it displays the course's description inside a span element with the class names small and text-danger. The small class likely makes the text smaller, and the text-danger class applies a red color to the text.

The key attribute is set to course.id for each list item to ensure that each item has a unique identifier, which helps React efficiently update and render the list.

Finally, the CourseList component is exported as the default export of the module, making it available for use in other parts of the application. This component provides a structured and styled way to display a list of courses, leveraging props to pass in the course data and using Bootstrap classes for styling.
*/
