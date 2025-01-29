const CourseList = () => {
  const courses = [
    "Advanced Web Design",
    "React Frontend",
    "Core Java",
    "Advanced Excel",
    "Python Data Science",
    "Backend using Java and Spring Boot",
    "PHP Laravel",
  ];

  return (
    <div>
      <h2 className="text-danger">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
