import {Process, Result} from "../types/process"

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
    let totalWaitTime = 0; //for calculating average wait time late
    let WaitTime = 0;
    let totalTurnAroundTime = 0; //for calculating average turnaround time later
    let TurnAroundTime = 0;
    let index = -1; //index with shortest arrival time

    for(let i = 0; i<numProcesses; i++)
    {
        if(sorted[i].arrivalTime >= currTime)
        {
            currTime = sorted[i].arrivalTime;
        }

        //loop to find process with shortest burst time
        for(let j = 0; j<numProcesses; j++)
        {
            if((sorted[j].arrivalTime <= currTime) && (sorted[j].burstTime < sorted[index].burstTime) && (sorted[j].burstTime != -1) || index == -1)
            {
                index = j;
            }
            result.timeline.push({time: currTime, process: sorted[index].pid});
        }
        currTime = currTime + sorted[index].burstTime;

        TurnAroundTime = currTime - sorted[index].arrivalTime;
        WaitTime = TurnAroundTime - sorted[index].burstTime;     

        totalTurnAroundTime = totalTurnAroundTime + TurnAroundTime;
        totalWaitTime = totalWaitTime + WaitTime;

        index = -1;
    }
    result.AverageTurnAroundTime = totalTurnAroundTime/numProcesses;
    result.AverageWaitTime = totalWaitTime/numProcesses;

    return result
}