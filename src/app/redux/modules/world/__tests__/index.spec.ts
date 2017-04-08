import { ADD, REMOVE, worldReducer} from '../index';

describe('World Module', () => {
  test('has the correct ADD action', () => {
    expect(ADD).toEqual('world/ADD');
  });

  test('has the correct REMOVE action', () => {
    expect(REMOVE).toEqual('world/REMOVE');
  });

  const removeAction = {world: null, type: REMOVE};
  test('supports the REMOVE action', () => {
    expect(worldReducer(null, removeAction)).toHaveProperty('world', null);
  });
});
