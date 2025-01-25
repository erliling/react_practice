import { ADDPERSON } from "../constant";

export const createAddPersonAction = personData => ({type: ADDPERSON, personData})