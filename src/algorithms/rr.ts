import {Process, Result} from "../types/process"

export function rr(processes: Process[], quantum: number): Result
{
    const result: Result =
    {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0, 
    };
    
    const sorted = processes.sort( (a, b) => a.arrivalTime - b.arrivalTime )
    
    let numProcesses = processes.length;
    let currTime = 0; //for the timeline
    let totalWaitTime = 0; //for calculating average wait time late
    let WaitTime = 0;
    let totalTurnAroundTime = 0; //for calculating average turnaround time later
    let TurnAroundTime = 0;
    let done = false;

    while(done == false)
    {
        

    }

    result.AverageTurnAroundTime = totalWaitTime/numProcesses;
    result.AverageWaitTime = totalWaitTime/numProcesses;

    return result
}