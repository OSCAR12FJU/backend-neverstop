import fs from 'fs'

const pathProducts = './dbProducts.json';
if(!fs.existsSync(pathProducts)){
    fs.writeFileSync(pathProducts, JSON.stringify({products:[]}, null, 2));
}

class ProductRepository {
    constructor(){
        this.pathProducts = pathProducts;
    }
    readData(){
        const data = fs.readFileSync(this.pathProducts, 'utf-8');
        return JSON.parse(data)
    }

    writeData(data){
        fs.writeFileSync(this.pathProducts, JSON.stringify(data, null, 2));
    }

    async save(product){
        const data = this.readData();
        data.products.push(product);
        this.writeData(data);
    }

    async filterCategory(category){
        const data = this.readData();
        return data.products.filter((pro) => pro.category.toLowerCase() === category.toLowerCase());
    }

    async selectProduct(id){
        const data = this.readData();
        return data.products.find((pro) => pro.id === Number(id));
    }

    async findTitleProduct(title){
        const data = this.readData();
        return data.products.find((product) => product.title.toLowerCase() === title.toLowerCase);
    }

    async getAllProducts(){
        const data = this.readData();
        return data.products;
    }
}

const productRepositoryInstance = new ProductRepository();

export {ProductRepository, productRepositoryInstance}