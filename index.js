
const input = document.getElementById('input');
const show = document.getElementById('res');
var url = "https://en.wikipedia.org/w/api.php"; 

input.addEventListener('input', (e) => {
    console.log(e.target.value);
    let search = e.target.value;
    var params = {
        action: "opensearch",
        search: search,
        limit: "10",
        namespace: "0",
        format: "json"
    };
    
    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(res){return res.json();})
        .then(function(res) {
            show.innerHTML = "";
            console.log(res);
            for (var i = 1; i < res[1].length; i++) {
                show.innerHTML += `<div class="resIt">
                                <a class="resTitre" href="${res[3][i]}">${res[1][i]}</a>
                                </div>`;
              }
            
        })
        .catch(function(error){console.log(error);});
    
})





