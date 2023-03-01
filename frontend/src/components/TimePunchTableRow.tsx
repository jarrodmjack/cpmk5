import React from 'react'
import { TimePunch } from '@/types/TimePunchTypes'

type TimePunchTableRowOwnProps = {
    timePunch: TimePunch
    handleMarkAsPaid: (timePunchId: number) => void
    handleDelete: (timePunchId: number) => void
}

const TimePunchTableRow: React.FC<TimePunchTableRowOwnProps> = ({ timePunch, handleMarkAsPaid, handleDelete }) => {
    return (
        <tr className='hover'>
            <td>{timePunch.employee_name}</td>
            <td>{timePunch.date}</td>
            <td>{timePunch.location}</td>
            <td>{timePunch.start_time}</td>
            <td>{timePunch.end_time}</td>
            <td>${timePunch.total_earned}</td>
            <td>
                <input
                    onClick={() => handleMarkAsPaid(timePunch.id!)}
                    type="checkbox"
                    defaultChecked={timePunch.paid ? true : false}
                    className="checkbox checkbox-success" />
            </td>
            <td>
                {timePunch.hours_worked}
            </td>
            <td onClick={() => handleDelete(timePunch.id!)}>
                DEL
            </td>
        </tr>
    )
}

export default TimePunchTableRow