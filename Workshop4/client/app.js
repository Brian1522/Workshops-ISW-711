document.addEventListener('DOMContentLoaded', async () => {
    const query = `
        query {
            allPersons {
                first_name
                last_name
                address {
                    cedula
                    age
                }
                id
            }
        }
    `;

    try {
        const response = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const { data } = await response.json();

        if (!data || !data.allPersons || !Array.isArray(data.allPersons)) {
            console.error('No se obtuvieron datos válidos de la consulta.');
            return;
        }

        const persons = data.allPersons;
        const personsListContainer = document.getElementById('persons-list');

        persons.forEach(person => {
            const { first_name, last_name, address, id } = person;
            const personContainer = document.createElement('div');
            personContainer.classList.add('person-container');
            personContainer.innerHTML = `
                <h3>${first_name} ${last_name}</h3>
                <p>Cédula: ${address.cedula}</p>
                <p>Age: ${address.age}</p>
                <p>ID: ${id}</p>
            `;
            personsListContainer.appendChild(personContainer);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
});
