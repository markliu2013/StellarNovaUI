import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
const run = async (command, path) => {
  //cmd represents the command, and args represent the arguments.
  //For example, in rm -rf, rm is the command, and -rf are the arguments.
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, //Path to execute the command
      stdio: 'inherit', //Output shared with the parent process
      shell: true //On Mac, it doesn't need to be enabled; on Windows, Git Bash support needs to be enabled.
    });
    //Close and resolve after execution is complete
    app.on('close', resolve);
  });
};

run('deploy.sh', resolve(__dirname, '../'));
