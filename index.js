/* ProtoType Example */

let users = {
    getfullname: function () {
        return this.firstname + " " + this.lastname;
    },
    getage: function () {
        let age = new Date().getFullYear() - this.birth;
        return age;
    }
}


let student = {
    firstname: 'Ahmed',
    lastname: 'raza',
    birth: 1997,

    /* Without Prototype */
    getStudentname: users.getfullname

    /*********** Before Creating users object *************/
    // getfullname: function () {
    //     return this.firstname + " " + this.lastname;
    // },
    // getage: function () {
    //     let age = new Date().getFullYear() - this.birth;
    //     return age;
    // }
}

let teacher = {
    firstname: 'Tariq',
    lastname: 'Ansari',
    birth: 1987,

    /* Without Prototype */
    getTeachername: users.getfullname

    /*********** Before Creating users object *************/
    // getfullname: function () {
    //     return this.firstname + " " + this.lastname;
    // },
    // getage: function () {
    //     let age = new Date().getFullYear() - this.birth;
    //     return age;
    // }
}

/* Use With ProtoType Here we access student and teacher data in users object */
student.__proto__ = users;
teacher.__proto__ = users;

console.log("With Prototype", student.getfullname());
console.log("With Prototype", teacher.getfullname());

console.log("With Prototype", student.getage());
console.log("With Prototype", teacher.getage());

// console.log("With Prototype",student);
// console.log("With Prototype",teacher);

/* Without Prototype */
console.log("Without Prototype", student.getStudentname());
console.log("Without Prototype", teacher.getTeachername());

// console.log("Without Prototype",student);
// console.log("Without Prototype",teacher);


/* Create Custom Prototype Properties */

/* With Object */
Object.prototype.anyName = "Custom Property With Prototype: Abc";

Object.prototype.anyNameFunction = function () {
    return "Custom Property With Prototype: Abc Function"
}

console.log(student.anyName);
console.log(teacher.anyNameFunction);
console.log(teacher.anyNameFunction());

/* With String */
String.prototype.anyNameString = "Property of String";

String.prototype.anyNameStringFunction = function () {
    return this.length + 2;
}

console.log("Hello".anyNameString);
console.log(student.firstname.anyNameString);
console.log(student.firstname.anyNameStringFunction);
console.log(student.firstname.anyNameStringFunction());
