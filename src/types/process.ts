export class Process {
    constructor(pid, arrivalTime, burstTime, remainingTime, priority, queueLevel) {
        this.pid = pid;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.remainingTime = remainingTime;
        this.priority = priority;
        this.queueLevel = queueLevel;
    }
}

export class Result {
    constructor(timeline, AverageWaitTime, AverageTurnAroundTime) {
        this.timeline = timeline;
        this.AverageWaitTime = AverageWaitTime;
        this.AverageTurnAroundTime = AverageTurnAroundTime;
    }
}
