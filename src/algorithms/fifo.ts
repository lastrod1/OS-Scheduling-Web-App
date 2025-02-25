import {Process, Result} from "../types/process"

//first in first out
export function fifo(processes)
{
    const result = new Result([], 0, 0);
    
    const sorted = processes.sort( (a, b) => a.arrivalTime - b.arrivalTime )
    
    let numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let totalWaitTime = 0; //for calculating average wait time late
    let WaitTime = 0;
    let totalTurnAroundTime = 0; //for calculating average turnaround time later
    let TurnAroundTime = 0;

    for(let i = 0; i < numProcesses; i++)
    {
        if(sorted[i].arrivalTime > currTime)
        {
            currTime = sorted[i].arrivalTime;
        }

        result.timeline.push({time: currTime, process: sorted[i].pid});
        currTime = currTime + sorted[i].burstTime;
        
        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time
        TurnAroundTime = currTime - sorted[i].arrivalTime;
        WaitTime = TurnAroundTime - sorted[i].burstTime;

        totalTurnAroundTime = totalTurnAroundTime + TurnAroundTime;
        totalWaitTime = totalWaitTime + WaitTime;
    }

    result.AverageTurnAroundTime = totalTurnAroundTime/numProcesses;
    result.AverageWaitTime = totalWaitTime/numProcesses;

    return result
}