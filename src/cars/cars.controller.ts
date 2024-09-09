import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){
        
    }
    @Get()
    findAll(){
        return this.carService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() body: any){
        return this.carService.create(body);
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string){
        return this.carService.getById(id);
    }

    /*
    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() body: CreateCarDto){
        return this.carService.update(id,body);
    }
    */
}
