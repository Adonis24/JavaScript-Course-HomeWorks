describe('Сумма', function () {
  it('Возвращает ли тип данных true', function () {
    assert.typeOf(sum(2,2), 'boolean')
  });
});
describe('Равенство', function () {
  it('Равна ли переменная num значению 5', function () {
    assert.equal(num, 5)
  });
});
describe('Значения', function () {
  it('Тип данных each', function () {
    assert.typeOf(each(arrAnother, myFunc), 'array')
  });
  it('Результат', function () {
    assert.deepEqual(each(arrAnother, myFunc), [8, 7, 6, 5, 4])
  });
  it('Результат', function () {
    expect(each(arrAnother, myFunc)).to.deep.equal([8, 7, 6, 5, 4]);
  });
  it('Проверка на свойство lenght', function() {
    assert.lengthOf(each(arrAnother, myFunc), 5)
  });
});
