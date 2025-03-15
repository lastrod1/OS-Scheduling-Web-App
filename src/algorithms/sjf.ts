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
    let WaitTime = 0; //for calculating average wait time late
    let TurnAroundTime = 0; //for calculating average turnaround time later
    for(let i = 0; i<numProcesses; i++)
    {
        let index = -1;
        if(sorted[i].arrivalTime >= currTime)
        {
            currTime = sorted[i].arrivalTime;
            result.timeline.push({time: currTime, process: 0});
        }

        //loop to find process with shortest burst time
        for(let j = 0; j<numProcesses; j++)
        {
            if(sorted[j].arrivalTime <=currTime && !sorted[j].completed)
            {
                if(index === -1 || sorted[j].burstTime < sorted[index].burstTime)
                {
                    index = j;
                }
            }
        }
        currTime = currTime + sorted[index].burstTime;
        result.timeline.push({time: currTime, process: sorted[index].pid});

        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time
        TurnAroundTime = currTime - sorted[index].arrivalTime;
        WaitTime = TurnAroundTime - sorted[index].burstTime;
        result.AverageTurnAroundTime += TurnAroundTime;
        result.AverageWaitTime += WaitTime;

        sorted[index].completed = true;
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime/numProcesses;
    result.AverageWaitTime = result.AverageWaitTime/numProcesses;

    return result
}