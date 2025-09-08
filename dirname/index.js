const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data','ejemplo.txt') // crea una ruta empezando desde estoy parado, navega a la carpeta data y abre el txt. si tuviese mas carpetas podria agregarlas en el medio
//para ir para atras uso ".."

console.log(filePath)

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err)
        return
    }
    console.log('Contenido del archivo:', data)
})