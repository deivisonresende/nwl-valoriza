import { Request, Response } from 'express';
import { ListUserSenderComplimentsService } from '../services/ListUserSendComplimentsService';

export class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSenderComplimentsService =
      new ListUserSenderComplimentsService();

    const compliments = await listUserSenderComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
