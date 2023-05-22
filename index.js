const users = []

function getstudentlist(){
    document.getElementById("studentlist").innerHTML="";
    for (let i=0; i<users.length; i++){
        document.getElementById("studentlist").innerHTML+=
            '<tr>'+
            "<td>"+(i+1)+"</td>"+
            "<td>"+users[i].ism+"</td>"+
            "<td>"+users[i].familiya+"</td>"+
            "<td>"+users[i].email+"</td>"+
            "<td>"+users[i].yosh+"</td>"+
            "<td>"+
            '<button onclick="deleteStudent(' + i + ')" type="button" class="btn btn-danger maz">Delete</button>' +
            '<button onclick="editStudent('+i+')"  type="button" class="btn btn-warning ml-1 maz">Edit</button>' +
            "</td>"+
            '</tr>'

    }
}
getstudentlist()

function adduser(){
    let firstname = document.forms['myform']['firstname'].value;
    let lastname = document.forms['myform']['lastname'].value;
    let email = document.forms['myform']['email'].value;
    let age = document.forms['myform']['age'].value;
    let newObject={
        ism: firstname,
        familiya: lastname,
        email:email,
        yosh:age
    }

    if (firstname!=="" && lastname !=="" && email !== "" && age !==""){
        document.forms['myform'].reset()
        users.push(newObject)
        getstudentlist()
    }
    else{
        alert("To'liq kiriting")
    }
    console.log(users)
}
function deleteStudent(index) {
    users.splice(index, 1);
    getstudentlist();
}
function editStudent(index){
    document.forms['myform']['firstname'].value=users[index].ism
    document.forms['myform']['lastname'].value=users[index].familiya
    document.forms['myform']['email'].value=users[index].email
    document.forms['myform']['age'].value=users[index].yosh
    users.splice(index, 1);

    getstudentlist();
}





























