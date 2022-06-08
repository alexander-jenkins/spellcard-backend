import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsSerivce {
    products: Product[] = [];

    // insert a product into memory
    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.floor(Math.random() * 100000).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    // get all products
    getProducts() {
        return [...this.products];
    }

    // find an indiviual product
    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => prod.id === productId);
        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return { ...product };
    }

    // update a product
    updateProduct(
        productId: string,
        title: string,
        desc: string,
        price: number,
    ) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ...product };
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return [product, productIndex];
    }

    deleteProduct(prodId: string) {
        const [_product, index] = this.findProduct(prodId);
        this.products.splice(index, 1);
    }
}
