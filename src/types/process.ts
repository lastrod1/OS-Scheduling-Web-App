export interface Process
{
    pid: number;
    arrivalTime: number; 
    burstTime: number; 
    completed: boolean;
    remainingTime: number;
    queuelevel: number;
}

export interface Result
{
    timeline: {time: number; process: number}[];
    AverageWaitTime: number;
    AverageTurnAroundTime: number;
}