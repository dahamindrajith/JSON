function display(names) {
  const nale = `<table>
    <tr>
        <th>Names:</th>
        <td>${names.name}</td>
    </tr>
</table>`;
document.querySelector('.container').innerHTML=nale;
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
    display(JSON.parse(xhr.responseText));
  }
};
xhr.open("GET", "json.json");
xhr.send();
