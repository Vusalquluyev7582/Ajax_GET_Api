document.querySelector("#but1").addEventListener("click", melumatAl)

function melumatAl() {
    let loading = document.querySelector("#loading")
    loading.style.display = "block"

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "api.json", true)

    setTimeout(() => {
        xhr.onload = function () {
            loading.style.display = "none"
            if (this.status === 200) {
                let family = (JSON.parse(this.responseText));

                let html = ""

                family.forEach(element => {
                    html +=
                        `<tr>
                    <td>${element.ad}</td>
                    <td>${element.soyAd}</td>
                    <td>${element.yas}</td>
                    <td>${element.sagird}</td>
                    </tr>`
                });

                document.querySelector("#melumat").innerHTML = html
            }
        }
        xhr.send()
    }, 1500);
}