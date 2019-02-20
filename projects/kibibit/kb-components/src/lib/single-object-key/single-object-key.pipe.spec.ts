import { SingleObjectKeyPipe } from './single-object-key.pipe';

describe('SingleObjectKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new SingleObjectKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
