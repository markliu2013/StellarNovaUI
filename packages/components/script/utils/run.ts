import { spawn } from 'child_process';

export default async (command: string, path: string) => {
  // cmd' represents the command, and 'args' represents the parameters.
  // For example, in 'rm -rf', 'rm' is the command, and '-rf' are the parameters.
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path, //The path where the command is executed.
      stdio: 'inherit', // Output is shared with the parent process.
      shell: true // Mac does not need to be enabled, but on Windows, Git Bash needs to be enabled for support.
    });
    // After execution is complete, close and resolve.
    app.on('close', resolve);
  });
};
