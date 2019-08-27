var qs = require("querystring")

function intervalo(request, response) {
    if (request.method == "GET") {
        response.writeHead(200, { "Content-Type": "text/html" })
        response.write("<form method=post>")
        response.write("<input type=number name=numero1>")
        response.write("<input type=number name=numero2>")
        response.write("<input type=submit />")
        response.write("</form>")
        response.end()
    } else {
        body = ''
        request.on('data', function (data) {
            body += data
        })
        request.on('end', function () {
            response.writeHead(200, { "Content-Type": "text/html" });
            let dados = qs.parse(body)
            let numero1 = dados.numero1
            let numero2 = dados.numero2

            if (numero1 > numero2) {                
                let aux = numero2
                numero2 = numero1
                numero1 = aux
            }

            response.write("Intervalo: [")
            while (numero1 <= numero2) {
                if (numero1 < numero2) {
                    response.write(numero1 + ", ")
                } else {
                    response.write(numero1 + "]")
                }
                numero1++
            }

            response.end()
        })
    }

}

exports.intervalo = intervalo

