export interface Process
{
    pid: number;
    arrivalTime: number; 
    burstTime: number; 
    completed: boolean;
    remainingTime: number;
    priority?: number; 
    queueLevel?: number;
}

export interface Result
{
    timeline: {time: number; process: number}[];
    AverageWaitTime: number;
    AverageTurnAroundTime: number;
}