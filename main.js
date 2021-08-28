var name_of_student_array = []

function submit()
{

    var name_1 =document.getElementById("name_of_student_1").value
    var name_2 =document.getElementById("name_of_student_2").value
    var name_3 =document.getElementById("name_of_student_3").value
    var name_4 =document.getElementById("name_of_student_4").value
    var name_5 =document.getElementById("name_of_student_5").value
    var name_6 =document.getElementById("name_of_student_6").value

    name_of_student_array.push(name1);
    name_of_student_array.push(name2);
    name_of_student_array.push(name3);
    name_of_student_array.push(name4);
    name_of_student_array.push(name5);
    name_of_student_array.push(name6);

    console.log(name_of_student_array);

    document.getElementById("display_name").innerHTML = name_of_student_array;
    document.getElementById("button").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}


function sort()
{

    name_of_student_array.sort();
    document.getElementById("display_name").innerHTML = name_of_student_array;
}