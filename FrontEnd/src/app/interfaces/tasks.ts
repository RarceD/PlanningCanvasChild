

export interface TasksMain {
  text: string,
  start: number,
  end?: number,
  status?: TaskStatus,
  associatedTasks?: TaskSecond[],
  expanded?: boolean
}

export interface TaskSecond {
  start?: number,
  text: string
  childAsociated?: string,
  color?: string,
  deadline?: Object
}

export interface Children{
  name: string,
  color: string,
}

enum TaskStatus {
  "NOTSTARTED",
  "WORKING",
  "END"
}
