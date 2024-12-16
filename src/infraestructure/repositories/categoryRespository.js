import fs from 'fs';

const pathCategory = './dbCategory.json';
if(!fs.existsSync(pathCategory)){
    fs.writeFileSync(pathCategory, JSON.stringify({category:[]}, null, 2));
}

class CategoryRepository {
    constructor(){
        this.category = pathCategory;
    }
    readData(){
        const data = fs.readFileSync(this.category, 'utf-8');
        return JSON.parse(data)
    }
    insertData(data){
        fs.writeFileSync(this.category, JSON.stringify(data, null, 2));
    }
    async save(category){
        const data = this.readData();
        data.category.push(category);
        this.insertData(data);
    }
    async fiilterCategory(category){
        const data = this.readData();
        return data.category.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    }
    async getAllCategory(){
        const data = this.readData();
        return data.category;
    }

}

const categoryRepositoryInstance = new CategoryRepository();

export {categoryRepositoryInstance, CategoryRepository}; 