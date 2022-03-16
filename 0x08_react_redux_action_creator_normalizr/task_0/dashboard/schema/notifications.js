import * as db from '../notifications.json'


export function getAllNotificationsByUser(userId) {
  return db.default.filter((i) => i.author.id === userId)
  .map(({ context }) => context)
}