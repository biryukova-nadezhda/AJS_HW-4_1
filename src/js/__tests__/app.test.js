import healthLevel from '../app';

const checkObj = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лекарь', health: 45 }, 'wounded'],
  [{ name: 'Воин', health: 12 }, 'critical'],
];

const handler = test.each(checkObj);

handler('check healf level for %O', (person, expected) => {
  const result = healthLevel(person);
  expect(result).toBe(expected);
});
