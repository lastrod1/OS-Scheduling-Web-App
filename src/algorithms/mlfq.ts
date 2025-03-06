import {Process, Result} from "../types/process"

/*
    Rules: 
    1. if prio A > prio B, A runs
    2. if prio A = prio B, both run in round robin
    3. processes are placed at highest priority when they arrive
    4. if a process uses up its allotment, it is moved to the next lower priority
    5. after some (S) move all processes to the highest priority
*/

export function sjf(processes: Process[]): Result
{
    const result: Result =
    {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0, 
    };
    const sorted = processes.sort( (a, b) => a.arrivalTime - b.arrivalTime )
    
    let numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let WaitTime = 0; //for calculating average wait time late
    let TurnAroundTime = 0; //for calculating average turnaround time later

    
    result.AverageTurnAroundTime = result.AverageTurnAroundTime/numProcesses;
    result.AverageWaitTime = result.AverageWaitTime/numProcesses;

    return result
}