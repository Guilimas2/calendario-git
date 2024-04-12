function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
 
    if (days < 1) {
        alert("Por favor, digite umm número de dia valido entre 1 a 30.");
    } else if (days >= 32) {
        alert("Por favor, digite umm número de dia valido entre 1 a 30.");
    } else{
        let td = calendar.getElementsByTagName('td')[(parseInt(days) + 0)];
        td.style.backgroundColor = color;
   
    }
}