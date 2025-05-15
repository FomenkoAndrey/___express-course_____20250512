import chalk from 'chalk'
import * as util from 'node:util'
import morgan from 'morgan'

const useColors = !process.env.NO_COLOR

export const styles = {
  info: useColors ? chalk.blue : (text) => text,
  success: useColors ? chalk.green : (text) => text,
  warning: useColors ? chalk.yellow : (text) => text,
  error: useColors ? chalk.red : (text) => text,
  debug: useColors ? chalk.magenta : (text) => text,
  highlight: useColors ? chalk.cyan : (text) => text
}

export const log = (message, type = 'info') => {
  if (!styles[type]) {
    console.error(`Log type '${type}' is not supported`)
    return
  }

  if (message === undefined) {
    console.log(styles[type]('undefined'))
    return
  }

  if (typeof message === 'string') {
    console.log(styles[type](message))
    return
  }

  console.log(
    styles[type](util.inspect(message, { depth: null, colors: useColors }))
  )
}

export const morganFormat =
  ':method :url :status - :response-time ms - :req[content-length] bytes - :res[content-length] bytes'

export const requestLogger = morgan(morganFormat, {
  stream: {
    write: (message) => {
      console.log(styles.info(message.trim()))
    }
  }
})
