function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => resolve(Data))
            .catch(error => reject(error));

    }
    );
}

fetchDataPromise()
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data", error));
