

export interface TasksMain {
  text: string,
  start: number,
  end: number,
  status: TaskStatus,
  associatedTasks: TaskSecond[]

}

export interface TaskSecond {
  text: string
  childAsociated: string,
  color: number,
}

enum TaskStatus {
  "NOTSTARTED",
  "WORKING",
  "END"
}
