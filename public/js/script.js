const personList = document.querySelector("#persons");
const form = document.querySelector("#newPerson")

const getPeople = ()=>{
    fetch("/persons").then(res=>res.json()).then(data=>{
        console.log(data);
        data.forEach(person=>{
            const newLi = document.createElement("li");
            newLi.textContent = `${person.id}. Meet ${person.name}, a ${person.role}!`
            personList.append(newLi)
        })
    })
}

form.addEventListener("submit",e=>{
    e.preventDefault();
    const newPersonObj = {
        id:document.querySelector("#newId").value,
        name:document.querySelector("#newName").value,
        role:document.querySelector("#newRole").value,
    }
    console.log(newPersonObj);
    fetch("/persons",{
        method:"POST",
        body:JSON.stringify(newPersonObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        }
    })
})

getPeople()