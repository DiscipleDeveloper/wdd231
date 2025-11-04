const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createCourseCard(courses) {
    document.querySelector(".subject").innerHTML = "";
    courses.forEach(course => {
        let card = document.createElement("section");
        let courseName = document.createElement("h3");

        courseName.textContent = course.subject + " " + course.number;
        if (course.completed == true) {
            courseName.innerHTML += `<br><span style="color: green;">Finished<span>`; 
        }
        else {
            courseName.innerHTML += `<br><span style="color: #e01a4f;">Pending<span>`;
        }

        card.appendChild(courseName);
        document.querySelector(".subject").appendChild(card);
        
    });
}

const allCourses = document.querySelector("#all-courses");
const cseCourses = document.querySelector("#cse-courses");
const wddCourses = document.querySelector("#wdd-courses");

const creditNo = document.querySelector(".course")
let credits = document.createElement("p");
creditNo.append(credits);




allCourses.addEventListener("click", () => {
    createCourseCard(courses);

    let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    credits.innerHTML = `<p>The total credits of the courses listed below is ${totalCredits}</p>`;
})

cseCourses.addEventListener("click", () => {

    let filteredCourses = courses.filter(course => course.subject === "CSE")
    createCourseCard(filteredCourses);

    let totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    credits.innerHTML = `<p>The total credits of the courses listed below is ${totalCredits}</p>`;
});

wddCourses.addEventListener("click", () => {
    let filteredCourses = courses.filter(course => course.subject === "WDD")
    createCourseCard(filteredCourses);

    let totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    credits.innerHTML = `<p>The total credits of the courses listed below is ${totalCredits}</p>`;
});

let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
credits.innerHTML = `<p>The total credits of the courses listed below is ${totalCredits}</p>`;


createCourseCard(courses)


