//https://swapi.dev/documentation#planets
https://react.dev/learn/react-developer-tools

fetch("https://crudcrud.com/api/7f061ddf3d1548d6aea97b41cd358664/wines", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(values),
}).then((response) => {
response.json().then((data: Wine) => {
navigate("/list-wine");
});
});
