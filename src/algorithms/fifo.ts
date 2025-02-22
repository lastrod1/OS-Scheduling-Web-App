import {Process, Result} from "../types/process"

export function FirstInFirstOut(processes: Process[]): Result
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

    for(let i = 0; i < numProcesses; i++)
    {
        if(processes[i].arrivalTime > currTime)
        {
            currTime = processes[i].arrivalTime;
        }

        result.timeline.push({time: currTime, process: processes[i].pid});
        
        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time
        TurnAroundTime = currTime - processes[i].arrivalTime;
        WaitTime = TurnAroundTime - processes[i].burstTime;

        totalTurnAroundTime = totalTurnAroundTime + TurnAroundTime;
        totalWaitTime = totalWaitTime + WaitTime;
    }

    result.AverageTurnAroundTime = totalWaitTime/numProcesses;
    result.AverageWaitTime = totalWaitTime/numProcesses;

    return result
}