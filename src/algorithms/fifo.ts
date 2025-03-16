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
    let TurnAroundTime = 0;
    let totalWaitTime = 0; //for calculating average wait time late
    let totalTurnAroundTime = 0; //for calculating average turnaround time later

    for(let i = 0; i < numProcesses; i++)
    {
        if(processes[i].arrivalTime > currTime)
        {
            currTime = processes[i].arrivalTime;
            result.timeline.push({time: currTime, process: 0});
        }
        processes[i].completed = true;
        currTime += processes[i].burstTime;
        result.timeline.push({time: currTime, process: processes[i].pid});
        
        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time

        TurnAroundTime = currTime - sorted[i].arrivalTime;
        totalTurnAroundTime = totalTurnAroundTime + TurnAroundTime;
        totalWaitTime = totalWaitTime + (TurnAroundTime - sorted[i].burstTime);
        
    }

    result.AverageTurnAroundTime = totalWaitTime/numProcesses;
    result.AverageWaitTime = totalWaitTime/numProcesses;

    return result
}