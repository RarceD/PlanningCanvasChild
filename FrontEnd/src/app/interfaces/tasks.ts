

export interface TasksMain {
  id: number,
  text: string,
  start: number,
  end?: number,
  status?: number,
  associatedTasks?: TaskSecond[],
  expanded?: boolean
}

export interface TaskSecond {
  id?: number,
  text: string
  start?: number,
  end?: number,
  child_name?: string,
  id_main_task?: number,
}

export interface Children{
  name: string,
  color: string,
}

enum TaskStatus {
  "NOTSTARTED", "close-outline",
  "WORKING","play-outline",
  "END","checkmark-done-outline"
}
