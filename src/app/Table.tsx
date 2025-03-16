import React from 'react';
import { Process } from '../types/process';

interface TableProps {
  processes: Process[];
}

const Table: React.FC<TableProps> = ({ processes }) => {
  return (
    <div style={{ width: '80%', margin: 'auto', paddingTop: '20px' }}>
      <h2 style={{ color: '#fff', textAlign: 'center' }}>Processes Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #fff', padding: '8px' }}>PID</th>
            <th style={{ border: '1px solid #fff', padding: '8px' }}>Arrival Time</th>
            <th style={{ border: '1px solid #fff', padding: '8px' }}>Burst Time</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process) => (
            <tr key={process.pid}>
              <td style={{ border: '1px solid #fff', padding: '8px' }}>{process.pid}</td>
              <td style={{ border: '1px solid #fff', padding: '8px' }}>{process.arrivalTime}</td>
              <td style={{ border: '1px solid #fff', padding: '8px' }}>{process.burstTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;