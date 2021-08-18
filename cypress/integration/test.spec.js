import { testFunction } from '../support/helper/helpers'

it ('should fail to import alias', () => {
    expect(testFunction()).to.be('test2');
});