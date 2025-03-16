import { Process, Result } from "../types/process";

export function stcf(processes: Process[]): Result {
    const result: Result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0,
    };
    const sorted = processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    const numProcesses = sorted.length;
    let currTime = 0; // for the timeline
    let TurnAroundTime = 0; // for calculating average turnaround time later
    let completedProcesses = 0;
    let shortest_index = -1; // index of process with shortest remaining time
    let currentProcess = -1;

    while (completedProcesses < numProcesses) {
        shortest_index = -1;
        for (let i = 0; i < numProcesses; i++) {
            if (sorted[i].arrivalTime <= currTime && !sorted[i].completed) {
                if (shortest_index == -1 || sorted[i].remainingTime < sorted[shortest_index].remainingTime) {
                    shortest_index = i;
                }
            }
        }

        if(shortest_index == -1) 
        {
            if(shortest_index != currentProcess) //switching from process to idle
            {
                result.timeline.push({ time: currTime, process: sorted[currentProcess].pid });
                sorted[currentProcess].remainingTime -= 1;
                currentProcess = shortest_index;
            }
        }
        else if (shortest_index != currentProcess)
        {
            if(currentProcess == -1) //switching from idle to process
            {
                result.timeline.push({ time: currTime, process: 0 });
            }
            else //switching from process to process
            {
                result.timeline.push({ time: currTime, process: sorted[currentProcess].pid });
                sorted[currentProcess].remainingTime -= 1;
            }
            currentProcess = shortest_index;
        }
        else //same process
        {
            sorted[currentProcess].remainingTime -= 1;
        }

        if(currentProcess != -1 && sorted[currentProcess].remainingTime == 0) //process completed
        {
            sorted[currentProcess].completed = true;
            completedProcesses += 1;
            TurnAroundTime = currTime - sorted[currentProcess].arrivalTime + 1;
            result.AverageTurnAroundTime += TurnAroundTime;
            result.AverageWaitTime += TurnAroundTime - sorted[currentProcess].burstTime;
            result.timeline.push({ time: currTime, process: sorted[currentProcess].pid });
            continue;
        }

        currTime += 1;
    }

    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;

    return result;
}