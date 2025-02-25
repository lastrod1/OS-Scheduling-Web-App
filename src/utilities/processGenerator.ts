import { Process } from "../types/process";

//this makes a random number of processes with random features
//returns an array of processes to be processed by the scheduling algorithms

export function generateProcesses(count)
{
    let MaxBurst = 7;
    let MaxArrival = 7;

    let processes = [];

    for(let i = 0; i < count; i++)
    {
        pid = i + 1;
        arrivalTime = Math.floor(Math.random() * MaxArrival);
        burstTime = Math.floor(Math.random()* MaxBurst);

        processes.push(new Process(pid, arrivalTime, burstTime));
    }
    return processes
}

