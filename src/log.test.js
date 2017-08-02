import chalk from 'chalk'
import { log, info, warn, error } from './log'

// Returns logged strings instead of printing them.
const logReturner = str => str

it('prints log messages in the correct format', () => {
  expect(log('asdf', true, logReturner)).toBe('   asdf');
  expect(info('asdf', true, logReturner)).toBe(chalk.blue(' * asdf'));
  expect(warn('asdf', true, logReturner)).toBe(chalk.yellow(' * asdf'));
  expect(error('asdf', true, logReturner)).toBe(chalk.red(' * asdf'));
});

it('prints log messages in the correct format without prefix', () => {
  expect(log('asdf', false, logReturner)).toBe('asdf');
  expect(info('asdf', false, logReturner)).toBe(chalk.blue('asdf'));
  expect(warn('asdf', false, logReturner)).toBe(chalk.yellow('asdf'));
  expect(error('asdf', false, logReturner)).toBe(chalk.red('asdf'));
});
