export interface TimePunch {
    employee_id: number
    employee_name: string
    location: string
    date: string
    hours_worked: number
    paid: boolean
    start_time: string
    end_time: string
    total_earned: number
    id?: number
  }