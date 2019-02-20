import { SingleErrorPipe } from './single-error.pipe';

describe('SingleErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new SingleErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
