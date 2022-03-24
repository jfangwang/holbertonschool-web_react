import * as db from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr'


export function getAllNotificationsByUser(userId) {
  // Normalize dataset
  const notifs = normalizer.entities.notifications;
  const msgs = normalizer.entities.messages;
  const notifsList = [];

  for (const item in notifs) {
    if (notifs[item].author === userId) {
      notifsList.push(msgs[notifs[item].context]);
    }
  }
  return notifsList;

  // return db.default.filter((i) => i.author.id === userId)
  // .map(({ context }) => context)
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
