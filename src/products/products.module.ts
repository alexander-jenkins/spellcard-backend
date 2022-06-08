import { Module } from '@nestjs/common';
import { ProductsSerivce } from './product.service';
import { ProductsController } from './products.controller';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsSerivce],
})
export class ProductsModule {}
