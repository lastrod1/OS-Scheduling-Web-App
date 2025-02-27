import { Process } from "../types/process";

//this makes a random number of processes with random features
//returns an array of processes to be processed by the scheduling algorithms

export function generateProcesses(count:number) : Process[]
{
    let MaxBurst = 7;
    let MaxArrival = 7;

    let processes: Process[] = [];

    for(let i = 0; i < count; i++)
    {
        processes.push({pid: i+1, 
                        arrivalTime: Math.floor(Math.random() * MaxArrival) + 1, 
                        burstTime: Math.floor(Math.random()* MaxBurst)+ 1,
                        completed: false,});
    }
    return processes
}
