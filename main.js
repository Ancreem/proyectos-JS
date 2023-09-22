const formulario = document.querySelector("#formAdd");
const formEdit = document.querySelector("#formEdit");
const dialog = document.querySelector("dialog");

console.log(dialog)

const url = "https://650cfbe547af3fd22f6817b0.mockapi.io/table"

formulario.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let dato = Object.fromEntries(new FormData(e.target));

    const res = await fetch(url);         
    console.log(res);

    const data = await res.json();
    console.log(data);

    let config = {
        // metodo de 
        method: "POST",
        headers:{"content-type":"application/json"},
        // Pasar a JSON el dato
        body:JSON.stringify(dato)
    }
    const envio = await (await fetch(url,config)).json();
    location.reload()
});

document.addEventListener("DOMContentLoaded", async (e)=>{
    const tabla = document.querySelector("#data-table");
    let res = await(await fetch(url)).json();
    console.log(res)
    res.map((element)=>{
        tabla.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${element.id}</td>
            <td>${element.valor}</td>
            <td>${element.caja}</td>
            <td>
                <button id="${element.id}" class="delet">
                    <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
                        <title>delete [#1487]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                    
                    </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]">
                    
                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <button id="${element.id}" class="edit">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </td>
        </tr>
        `)
    });


    const btDelet = document.querySelectorAll(".delet");
    console.log(btDelet)
    const btEdit = document.querySelectorAll(".edit");
    console.log(btEdit);

    btDelet.forEach((element) =>{
        element.addEventListener("click",()=>{
            // console.log(typeof element.id)
            deleteDAta(element.id);
        })
    });

    btEdit.forEach((element)=>{
        element.addEventListener("click",(event)=>{
            dialog.showModal();
            editData(element.id);
        })
    });
});
