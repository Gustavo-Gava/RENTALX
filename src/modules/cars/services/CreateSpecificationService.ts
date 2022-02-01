import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.SpecificationsRepository.findByName(name)
      
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!")
    }

    this.SpecificationsRepository.create({ name, description })
  }
}