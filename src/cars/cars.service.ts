import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
    cars: Car[] =[
        {
            id: uuid(),
            model: 'Fiesta',
            brand: 'Ford',
            year: 2002,
        },
        {
            id: uuid(),
            model: 'Focus',
            brand: 'Ford',
            year: 2005,
        },
        {
            id: uuid(),
            model: 'Civic',
            brand: 'Honda',
            year: 2003,
        },
    ]

    findAll(): Car[]{ 
        return this.cars;
    }

    getById(id: string): Car {
        const car = this.cars.find(car => car.id == id);
        if(car === undefined){
            throw new NotFoundException(`Car with id ${id} not found`)
        }
        return this.cars.find(car => car.id === id);
    }
    create(car: CreateCarDto){
        const newCar: Car = {id: uuid(), ...car}
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string,car:CreateCarDto):Car{
        //Forma 1 (PUT lo cual cambia el objeto completo)
        //const index = this.cars.findIndex(car => car.id === id);
        //this.cars[index] = car;

        //Forma 2
        const carUpdate = this.getById(id);
        Object.assign(carUpdate,car);
        return carUpdate;

    }
}
