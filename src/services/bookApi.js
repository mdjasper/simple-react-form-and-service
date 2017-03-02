const service = 'https://www.googleapis.com/books/v1/volumes?q=title:'

export default (title) => fetch(`${service}${title}`)
    .then(res => 
            res.ok ? 
            res.json() : 
            Promise.reject(res));