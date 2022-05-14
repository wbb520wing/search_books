import { WordsLimitedPipe } from './words-limited.pipe';

describe('WordsLimitedPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsLimitedPipe();
    expect(pipe).toBeTruthy();
  });
});
