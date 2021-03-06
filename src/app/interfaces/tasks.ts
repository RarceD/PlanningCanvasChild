

export interface TasksMain {
  text: string,
  start: number,

  end?: number,
  status?: TaskStatus,
  associatedTasks?: TaskSecond[]

}

export interface TaskSecond {
  text: string
  childAsociated?: string,
  color?: number,
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
