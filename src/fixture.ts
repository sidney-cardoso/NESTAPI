import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.init();

    const dataSource = app.get<DataSource>(getDataSourceToken());
    await dataSource.synchronize(true);
    const productRepo = dataSource.getRepository('Product');
    await productRepo.insert([
        {
            name: 'Produto 1',
            description: 'Descrição do Produto 1',
            image_url: 'https://source.unsplash.com/random',
            price: 29.99,
        },
        {
            name: 'Produto 2',
            description: 'Descrição do Produto 2',
            image_url: 'https://source.unsplash.com/random',
            price: 19.99,
        },
        {
            name: 'Produto 3',
            description: 'Descrição do Produto 3',
            image_url: 'https://source.unsplash.com/random',
            price: 39.99,
        },
        {
            name: 'Produto 4',
            description: 'Descrição do Produto 4',
            image_url: 'https://source.unsplash.com/random',
            price: 49.99,
        },
        {
            name: 'Produto 5',
            description: 'Descrição do Produto 5',
            image_url: 'https://source.unsplash.com/random',
            price: 14.99,
        },
        {
            name: 'Produto 6',
            description: 'Descrição do Produto 6',
            image_url: 'https://source.unsplash.com/random',
            price: 24.99,
        },
        {
            name: 'Produto 7',
            description: 'Descrição do Produto 7',
            image_url: 'https://source.unsplash.com/random',
            price: 34.99,
        },
        {
            name: 'Produto 8',
            description: 'Descrição do Produto 8',
            image_url: 'https://source.unsplash.com/random',
            price: 44.99,
        },
        {
            name: 'Produto 9',
            description: 'Descrição do Produto 9',
            image_url: 'https://source.unsplash.com/random',
            price: 54.99,
        },
        {
            name: 'Produto 10',
            description: 'Descrição do Produto 10',
            image_url: 'https://source.unsplash.com/random',
            price: 9.99,
        },
        {
            name: 'Produto 11',
            description: 'Descrição do Produto 11',
            image_url: 'https://source.unsplash.com/random',
            price: 64.99,
        },
        {
            name: 'Produto 12',
            description: 'Descrição do Produto 12',
            image_url: 'https://source.unsplash.com/random',
            price: 74.99,
        },
        {
            name: 'Produto 13',
            description: 'Descrição do Produto 13',
            image_url: 'https://source.unsplash.com/random',
            price: 19.99,
        },
        {
            name: 'Produto 14',
            description: 'Descrição do Produto 14',
            image_url: 'https://source.unsplash.com/random',
            price: 29.99,
        },
        {
            name: 'Produto 15',
            description: 'Descrição do Produto 15',
            image_url: 'https://source.unsplash.com/random',
            price: 39.99,
        },
        {
            name: 'Produto 16',
            description: 'Descrição do Produto 16',
            image_url: 'https://source.unsplash.com/random',
            price: 49.99,
        },
        {
            name: 'Produto 17',
            description: 'Descrição do Produto 17',
            image_url: 'https://source.unsplash.com/random',
            price: 59.99,
        },
        {
            name: 'Produto 18',
            description: 'Descrição do Produto 18',
            image_url: 'https://source.unsplash.com/random',
            price: 69.99,
        },
        {
            name: 'Produto 19',
            description: 'Descrição do Produto 19',
            image_url: 'https://source.unsplash.com/random',
            price: 79.99,
        },
        {
            name: 'Produto 20',
            description: 'Descrição do Produto 20',
            image_url: 'https://source.unsplash.com/random',
            price: 89.99,
        },
    ]);
    await app.close();
}
bootstrap();
