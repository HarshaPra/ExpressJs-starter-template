import { createServer } from './server';
import { config } from './config';

const startServer = async (): Promise<void> => {
  try {
    const app = createServer();
    
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port} in ${config.nodeEnv} mode`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();