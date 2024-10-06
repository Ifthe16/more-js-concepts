fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

async function loadData() {
    const res = await fetch('')
    const data = await res.json();
    console.log(data);
}

loadData();

const taskLoader = async () => {
    const res = await fetch('');
}

taskLoader();