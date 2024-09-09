import { IsInt, IsString, Max, Min } from "class-validator"; 

export class CreateCarDto{
    @IsString()
    model: string;
    @IsString()
    brand: string;
    @IsInt()
    @Min(1900)
    @Max(2040)
    year: number;
}