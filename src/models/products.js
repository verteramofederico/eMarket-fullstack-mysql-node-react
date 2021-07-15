const path = require('path');
const fs = require('fs');

const colorModel = require('./color.js');
const sizeModel = require('./size.js');

const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","products.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.size = element.size.map(size => {
                size = sizeModel.one(size)
                return size
            })
            return element;
        }).map(element => {
            element.colors = element.colors.map(color => {
                color = colorModel.one(color)
                return color
            })
            return element
        })
        return productos; 
    },    
    one: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    },
    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            name: data.name,
            price: data.price,
            description: data.description,
            /* colors: data.colors.lenght > 0 ? data.colors.map(color => parseInt(color)) : parseInt(data.colors) ,
                size: data.size.lenght > 0 ? data.size.map(size => parseInt(size)) : parseInt(data.size) , */
            colors: data.colors.lenght > 0 ? data.colors.map(color => parseInt(color)) : [parseInt(data.colors)],
            size: data.size.lenght >0 ? data.size.map(size => parseInt(size)) : [parseInt(data.size)],
            category: data.category,
            image: file.filename,
            offer: data.offer,
            outstanding: data.outstanding,
            discount: data.discount ? data.discount+"% OFF" : null
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;    
    },
    edit: function (data,id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id ){
                producto.name = data.name,
                producto.price = data.price,
                producto.description = data.description ? data.description : producto.description,
                producto.colors = data.colors.map(color => parseInt(color)),
                producto.size = parseInt(data.size),
                producto.category = data.category,
                producto.offer = data.offer 
                producto.outstanding = data.outstanding,
                producto.discount = data.discount
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    editImage: function (file,id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id ){
                producto.image = file.filename
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    search: function (id) {
        let producto = this.all();
        let resultado = producto.find(producto => producto.id == id)
        return resultado
    },
    delete: function (id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products",deleted.image))
        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    filter: function (category) {
        let producto = this.all();
        let resultado = producto.filter(producto => producto.category == category)
        return resultado }
}
module.exports = model;