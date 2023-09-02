import { useEffect } from "react";

const API_KEY = '9fa9382f92msh7a31d64d5592c88p168c3djsn1401d40dbe5c';
const API_HOST = 'weatherapi-com.p.rapidapi.com';
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9fa9382f92msh7a31d64d5592c88p168c3djsn1401d40dbe5c',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

function App() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US';
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className="App">
            
        </div>
    );
}

export default App;
