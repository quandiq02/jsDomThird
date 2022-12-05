let listname = document.querySelector('.name'),
    country = document.querySelector('.country'),
    age = document.querySelector('.age'),
    btn = document.querySelector('.btn');



btn.addEventListener('click', function addrow() {
    const list = document.querySelector('.list');
    const listItem =
        `
    <div class="newCont">
        <input type="text" class="newName border-none" value=${listname.value}>
        <input type="text" class="newCountry border-none" value =${country.value}>
        <input type="number" class="newAge border-none" value=${age.value}>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </div>
    `
    list.insertAdjacentHTML('afterbegin', listItem)

    listname.value = "";
    country.value = "";
    age.value = "";

    let newName = document.querySelector('.newName'),
        newCountry = document.querySelector('.newCountry'),
        newAge = document.querySelector('.newAge'),
        editBtn = document.querySelector('.editBtn');

    editBtn.addEventListener('click', () => {
        listname.removeAttribute('readonly');
        newCountry.removeAttribute('readonly');
        newAge.removeAttribute('readonly');
        newName.focus();
        newName.select();
    });

    deleteBtn = document.querySelector('.deleteBtn')
    deleteBtn.addEventListener('click', (e) => {
        const currentBtn = e.target;
        currentBtn.closest('.newCont').remove();
    })
});