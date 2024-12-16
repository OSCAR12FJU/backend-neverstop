import fs from 'fs';

export class Product {
    constructor(title, price, description, quantity, category, imageUrl){
        const data = JSON.parse(fs.readFileSync('./dbProducts.json', 'utf-8'));

        this.id = data.products.length > 0 ? data.products[data.products.length - 1].id + 1 : 1;
        this.title = title;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.category = category;
        this.image = imageUrl;
    }
    isValid(){
        return this.title && this.price && this.description && this.quantity && this.category && this.image;
    }
}