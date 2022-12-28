import logger from 'pino'; // logger
import dayjs from 'dayjs'; // to format timestamp

const log = logger({
    transport: {
        target: 'pino-pretty'
      },
    base: {
        pid: false,
    },
    timestamp: () => `,"time": "${dayjs().format()}"`,
});

export default log;


