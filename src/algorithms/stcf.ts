import { Process, Result } from "../types/process";

export function stcf(processes: Process[]): Result {
    const result: Result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0,
    };
    const sorted = processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    let numProcesses = sorted.length;
    let currTime = 0; // for the timeline
    let TurnAroundTime = 0; // for calculating average turnaround time later
    let completedProcesses = 0;
    let shortest_index = -1; // index of process with shortest remaining time
    let old_shortest = -1;

    while (completedProcesses < numProcesses) {
        shortest_index = -1;
        for (let i = 0; i < numProcesses; i++) {
            if (sorted[i].arrivalTime <= currTime && !sorted[i].completed) {
                if (shortest_index == -1 || sorted[i].remainingTime < sorted[shortest_index].remainingTime) {
                    shortest_index = i;
                }
            }
        }

        if (shortest_index == -1) {
            currTime++;
            old_shortest = -1;
            continue;
        }

        if (sorted[shortest_index].remainingTime == 1) {
            currTime += 1;
            sorted[shortest_index].remainingTime -= 1;
            sorted[shortest_index].completed = true;
            completedProcesses++;
            result.timeline.push({ time: currTime, process: sorted[shortest_index].pid });

            // wait time = turnaround time - burst time
            // turnaround time = completion time - arrival time
            TurnAroundTime = currTime - sorted[shortest_index].arrivalTime;
            result.AverageTurnAroundTime += TurnAroundTime;
            result.AverageWaitTime += TurnAroundTime - sorted[shortest_index].burstTime;
        } 

        else 
        {
            sorted[shortest_index].remainingTime -= 1;
            if (shortest_index != old_shortest && old_shortest != -1) {
                result.timeline.push({ time: currTime, process: sorted[old_shortest].pid });
            }
            else if (old_shortest == -1)
            {
                result.timeline.push({ time: currTime, process: 0 });
            }
            currTime += 1;
            old_shortest = shortest_index;
        }
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;

    return result;
}