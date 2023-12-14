export const searchBooks = (book) => {
    return fetch(`https://api.api-ninjas.com/v1/exercises?name=${book}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'CzFOeTT0EtP9tVynDq0F2A==8ThL2SiAyXH3sww9'
        }
    }
    )
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
};
// need to replace with a book api