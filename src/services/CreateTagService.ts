import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

export class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error('This name is invalid');
    }

    const tagAlreadyExists = await tagsRepositories.findOne({name});

    if (tagAlreadyExists) {
      throw new Error("There is already a tag with this name");
    }
    const tag = tagsRepositories.create({
      name
    });
    await tagsRepositories.save(tag);
    return tag;
  }
}
