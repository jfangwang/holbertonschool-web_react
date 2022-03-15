import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
<<<<<<< HEAD
})

export const map2 = map.withMutations((item) => item.set(2, 'Benjamin').set(4, 'Oliver'))
=======
});
export const map2 = map.withMutations((item) => item.set(2, 'Benjamin').set(4, 'Oliver'));
>>>>>>> 3bef0edff39464e4504dcfbd133aae0a29a37922
