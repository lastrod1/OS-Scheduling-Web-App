import {Process, Result} from "../types/process"

/*
    Rules: 
    1. if prio A > prio B, A runs
    2. if prio A = prio B, both run in round robin
    3. processes are placed at highest priority when they arrive
    4. if a process uses up its allotment, it is moved to the next lower priority
    5. after some (s) move all processes to the highest priority

    Notes: 
    - 3 queues for this mlfq
    - priority is based on queue level where 0 is the highest priority
    - 3rd queue will work as a FCFS queue
*/

export function mlfq(processes: Process[]): Result
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
    let TurnAroundTime = 0; //for calculating average turnaround time later
    let completedProcesses = 0;

    let q1quantum = 2; //quantum for queue 1
    let q2quantum = 4; //quantum for queue 2
    let allotment = 4;
    let s = 20; //after 20 units of time. move all processes to the highest priority

    let lastProcess = 0; //index of the last process that was put into the queue to ensure no duplicate processes
    let q1: Process[] = [];
    let q2: Process[] = [];
    let q3: Process[] = [];

    while(completedProcesses < numProcesses)
    {
        for(let i = 0; i<numProcesses; i++)
        {
            if(sorted[i].queuelevel == 0 && sorted[i].arrivalTime <= currTime && !sorted[i].completed && i == lastProcess)
            {
                q1.push(sorted[i]);
                lastProcess++; 
            }
        }
        let WorkingQueue = 0;;
        if(q1.length != 0)
        {
            WorkingQueue = 0;
        }
        else if(q2.length != 0)
        {
            WorkingQueue = 1;
        }
        else
        {
            WorkingQueue = 2;
        }

        if(WorkingQueue == 0)
        {
            if(q1[0].remainingTime <= q1quantum && q1[0].remainingTime > 0)
            {
                currTime += q1[0].remainingTime;
                s-=q1[0].remainingTime;
                q1[0].remainingTime = 0;
                result.timeline.push({time: currTime, process: q1[0].pid});
                q1[0].completed = true;
                completedProcesses++;
                q1.shift();
            }
            else
            {
                currTime += q1quantum;
                s-=q1quantum;
                q1[0].remainingTime -= q1quantum;
                result.timeline.push({time: currTime, process: q1[0].pid});
                let temp : Process = q1[0];
                q1.push(temp);
                q1.shift();
            }
        }
        else if(WorkingQueue == 1)
        {
            if(q2[0].remainingTime <= q2quantum && q2[0].remainingTime > 0)
            {
                currTime += q2[0].remainingTime;
                s-=q2[0].remainingTime;
                q2[0].remainingTime = 0;
                result.timeline.push({time: currTime, process: q2[0].pid});
                q2[0].completed = true;
                completedProcesses++;
                q2.shift();
            }
            else
            {
                currTime += q2quantum;
                s-=q2quantum;
                q2[0].remainingTime -= q2quantum;
                result.timeline.push({time: currTime, process: q2[0].pid});
                let temp : Process = q2[0];
                q2.push(temp);
                q2.shift();
            }
        }
        else
        {
            if(q3[0].remainingTime > 0)
            {
                currTime += q3[0].remainingTime;
                s-=q3[0].remainingTime;
                q3[0].remainingTime = 0;
                result.timeline.push({time: currTime, process: q3[0].pid});
                q3[0].completed = true;
                completedProcesses++;
                q3.shift();
            }
            else
            {
                currTime += 1;
                s-=1;
                result.timeline.push({time: currTime, process: 0});
            }
        }

        if(s <= 0)
        {
            s = 20;
            for(let i = 0; i<q2.length; i++)
            {
                let temp : Process = q2[0];
                q1.push(temp);
                q2.shift();
            }
            for(let i = 0; i<q3.length; i++)
            {
                let temp : Process = q3[0];
                q1.push(temp);
                q3.shift();
            }
        }


    }
    
    result.AverageTurnAroundTime = result.AverageTurnAroundTime/numProcesses;
    result.AverageWaitTime = result.AverageWaitTime/numProcesses;

    return result
}