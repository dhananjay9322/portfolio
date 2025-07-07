import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    {
      command: 'docker run myapp',
      output: 'Container myapp started successfully\nListening on port 3000...'
    },
    {
      command: 'kubectl get pods',
      output: 'NAME                    READY   STATUS    RESTARTS   AGE\nmyapp-deployment-abc123 1/1     Running   0          2m30s'
    },
    {
      command: 'python app.py',
      output: 'Starting Flask application...\n * Running on http://0.0.0.0:5000\n * Debug mode: off'
    }
  ];

  useEffect(() => {
    const typeCommand = async () => {
      if (currentCommand >= commands.length) return;

      setIsTyping(true);
      const cmd = commands[currentCommand];
      
      // Type command
      for (let i = 0; i <= cmd.command.length; i++) {
        setDisplayText(`$ ${cmd.command.slice(0, i)}`);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Show output
      await new Promise(resolve => setTimeout(resolve, 500));
      setDisplayText(prev => prev + '\n' + cmd.output);
      
      // Wait before next command
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentCommand(prev => (prev + 1) % commands.length);
      setIsTyping(false);
    };

    typeCommand();
  }, [currentCommand]);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive <span className="text-orange-500">Terminal</span>
          </h2>
          <p className="text-xl text-gray-300">
            Watch live DevOps commands in action
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <TerminalIcon className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">devops-terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 h-64 overflow-y-auto bg-gray-900 font-mono text-green-400">
            <div className="whitespace-pre-wrap">
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;