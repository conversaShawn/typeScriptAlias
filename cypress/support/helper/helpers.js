import { SomeEnum } from '@alias-example/sub-folder/app-code.ts';

export function testFunction() {
    console.log(`hello this is a ${SomeEnum.TEST_1}`);
    return SomeEnum.TEST_2;
}