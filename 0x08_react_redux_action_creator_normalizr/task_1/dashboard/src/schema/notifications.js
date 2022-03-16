import * as db from '../../notifications.json'
import { normalize, schema } from 'normalizr'


export function getAllNotificationsByUser(userId) {
  return db.default.filter((i) => i.author.id === userId)
  .map(({ context }) => context)
}

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: 'guid',
  }
)

const notification = new schema.Entity(
  "notifications",
  {
    author: user,
    context: message,
  }
)
export const normalizer = normalize(db.default, [notification]);
