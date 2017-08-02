// Module for logging output to the terminal.

import chalk from 'chalk'

const LOG = 'log'
const INFO = 'info'
const WARN = 'warn'
const ERROR = 'error'
const COLORS = {
  [INFO]: 'blue',
  [WARN]: 'yellow',
  [ERROR]: 'red'
}

// Messages of severity 'info' and above are prefixed with a star.
// Log messages are padded to the same offset.
const prefix = ' * '
const padding = '   '

// Log function. Override this to pipe all log output somewhere else.
const logFn = console.log // eslint-disable-line no-console

/**
 * Logs a message to the terminal with a certain severity level.
 *
 * @param {string} msg Message to log to the terminal
 * @param {string} severity One of 'log', 'info', 'warn' or 'error'
 * @param {string} usePrefix Whether to include a line prefix at the start
 * @param {function} logger Logger function to pass the string into
 */
const logMessage = (msg, severity, usePrefix = true, logger = logFn) => {
  if (severity === LOG) {
    return logger(`${usePrefix ? padding : ''}${msg}`)
  }
  else {
    return logger(chalk[COLORS[severity]](`${usePrefix ? prefix : ''}${msg}`))
  }
}

/**
 * Log functions for LOG, INFO, WARN, ERROR.
 *
 * @param {string} msg Message to log to the terminal
 */
export const log = (msg, usePrefix, logger) => logMessage(msg, LOG, usePrefix, logger)
export const info = (msg, usePrefix, logger) => logMessage(msg, INFO, usePrefix, logger)
export const warn = (msg, usePrefix, logger) => logMessage(msg, WARN, usePrefix, logger)
export const error = (msg, usePrefix, logger) => logMessage(msg, ERROR, usePrefix, logger)

/**
 * Logs the program header to the terminal, including the copyright
 * and other useful information.
 *
 * @param {string} header Name of app and URL
 * @param {string} copy Copyright status
 * @param {string} projInfo Project description
 * @param {string} version Software version
 * @param {string} node Version information for Node
 */
/* istanbul ignore next */
export const logHeader = (header, copy, projInfo, version, node) => {
  logFn(chalk.cyan(header))
  logFn(chalk.green(copy))
  logFn(chalk.yellow(projInfo))
  logFn(chalk.yellow(version))
  logFn(chalk.yellow(node))
}
