let data = [""]
let done = [""]

function formSubmit(event) {
    event.preventDefault()
    let input = document.getElementById("input-data").value
    data.push(input)
    
    let list = document.getElementById("to-do")
    list.innerHTML = ""
    
    for(let i = 1; i < data.length; i++){
        list.innerHTML += `<li>
                                <p>
                                    <button class="btn btn-dark" onClick = "doneList(event,${i})"> X </button>
                                    <span> ${data[i]} </span>
                                </p>
                            </li>`
    }
}

function doneList(event, idx) {
    event.preventDefault()
    done.push(data[idx])
    data.splice(idx, 1)

    let list = document.getElementById("done-list")
    list.innerHTML = ""
    
    for (let i = 1; i < done.length; i++){
        list.innerHTML += `<li>
                                <p>
                                    <button class="btn btn-dark" onClick = "deleteList(event,${i})"> X </button>
                                    <span> ${done[i]} </span>
                                </p>
                            </li>`
    }

    list = document.getElementById("to-do")
    list.innerHTML = ""

    for(let i = 1; i < data.length; i++){
        list.innerHTML += `<li>
                                <p>
                                    <button class="btn btn-dark" onClick = "doneList(event,${i})"> X </button>
                                    <span> ${data[i]} </span>
                                </p>
                            </li>`
    }
}

    function deleteList(event,idx) {
        event.preventDefault()
        
        done.splice(idx, 1)

        let list = document.getElementById("done-list")
        list.innerHTML = ""
        
        for (let i = 1; i < done.length; i++){
            list.innerHTML += `<li>
                                    <p>
                                        <button class="btn btn-dark" onClick = "deleteList(event,${i})"> X </button>
                                        <span> ${done[i]} </span>
                                    </p>
                                </li>`
        }
    }
