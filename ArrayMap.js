var courses = [
    { id: 1, name: "Mathematics", credits: 3 },
    { id: 2, name: "Physics", credits: 4 },
    { id: 3, name: "Chemistry", credits: 3 },
    { id: 4, name: "Biology", credits: 4 }
];

function getCourseName(course) {
    return {
        id: course.id,
        name: `Khoa hoc:  ${course.name}`,
        credits: `Gia: ${course.credits}`
    };
}

var courseNames = courses.map(getCourseName);
console.log(courseNames); // Output: ["Mathematics", "Physics", "Chemistry", "Biology"]
