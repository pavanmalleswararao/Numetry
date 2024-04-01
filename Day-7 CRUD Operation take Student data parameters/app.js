var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    id = document.getElementById("id"),
    name = document.getElementById("name"),
    age = document.getElementById("age"),
    address = document.getElementById("address"),
    phone = document.getElementById("phone"),
    email = document.getElementById("email"),
    submitBtn = document.querySelector(".submit"),
    studentInfo = document.getElementById("data")

let getData = localStorage.getItem('studentProfile') ? JSON.parse(localStorage.getItem('studentProfile')) : []

let isEdit = false, editId

file.onchange = function(){
    if(file.Files[0].size < 100000){
        var fileRerader = new FileReader();

        fileRerader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileRerader.readAsDataURL(file.files[0])
    }
    else{
        alert("this is a large file")
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/profile Icon.webp" : imgInput.src,
        studentId: id.value,
        studentName: name.value,
        age: age.value,
        studentAddress: address.value,
        phone: phone.value,
        email: email.value
    }

    if (isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('studentProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
})