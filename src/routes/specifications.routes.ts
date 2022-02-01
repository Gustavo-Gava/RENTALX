import { SpecificationsRepository } from './../modules/cars/repositories/SpecificationsRepository';
import { Router } from "express"
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService"

const specificationsRoutes = Router()
const specificationRepositories = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(specificationRepositories)

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationRepositories.list()

  return response.status(200).json(specifications)
})

export { specificationsRoutes }