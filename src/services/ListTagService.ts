import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository} from "typeorm"
import { classToPlain } from "class-transformer";


export class ListTagsService{
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    // return classToPlain(tags); 
    return classToPlain(tags)
  }
}