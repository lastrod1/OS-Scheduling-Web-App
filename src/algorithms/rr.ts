import {Process, Result} from "../types/process"

export function rr(processes: Process[], quantum: number): Result
{
    const result: Result =
    {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0, 
    };
    console.log("Processes in rr: ", processes); // Debugging log
    const sorted = processes.sort( (a, b) => a.arrivalTime - b.arrivalTime )
    
    let numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let TurnAroundTime = 0;
    let done = false;

    while(done == false)
    {
        done = true; 
        for(let i = 0; i<numProcesses; i++)
        {
            if(sorted[i].arrivalTime > currTime)
            {
                currTime = sorted[i].arrivalTime;
                result.timeline.push({time: currTime, process: 0});
                //here will be to indicate idle time
            }

            if(!sorted[i].completed)
            {
                console.log("(rr)Current process: ", sorted[i]); // Debugging log
                if(sorted[i].remainingTime <= quantum && sorted[i].remainingTime > 0)
                {
                    currTime += sorted[i].remainingTime;
                    sorted[i].remainingTime = 0;
                    result.timeline.push({time: currTime, process: sorted[i].pid});
                    sorted[i].completed = true;
                }
                else
                {
                    sorted[i].remainingTime -= quantum;
                    currTime += quantum;
                    result.timeline.push({time: currTime, process: sorted[i].pid});
                    done = false;
                }

                //wait time = turnaround time - burst time
                //turnaround time = completion time - arrival time
                TurnAroundTime = currTime - sorted[i].arrivalTime;
                result.AverageTurnAroundTime += currTime - sorted[i].arrivalTime;
                result.AverageWaitTime += TurnAroundTime - sorted[i].burstTime;

            }
        }
    }

    result.AverageTurnAroundTime = result.AverageTurnAroundTime/numProcesses;
    result.AverageWaitTime = result.AverageWaitTime/numProcesses;
    console.log("rr results: ", result); // Debugging log
    return result
}