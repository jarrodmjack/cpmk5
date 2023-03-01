import React from 'react'
import { TimePunch } from '@/types/TimePunchTypes'
import TimePunchTableRow from './TimePunchTableRow'
import TimePunchTableHeader from './TimePunchTableHeader'


type TimePunchTableDisplayOwnProps = {
    timePunches: Array<TimePunch>
}

const handleMarkAsPaid = async (timePunchId: number) => {
    try {
        await fetch(`http://localhost:8000/timepunch/${timePunchId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ timePunchId })
        });
    } catch (error) {
        console.error(error);
    }
}

const handleDeleteTimePunch = async (timePunchId: number) => {
    try {
        await fetch(`http://localhost:8000/timepunch/${timePunchId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ timePunchId })
        });
    } catch (error) {
        console.error(error);
    }
}

const TimePunchTableDisplay: React.FC<TimePunchTableDisplayOwnProps> = ({ timePunches }) => {

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <TimePunchTableHeader />
                <tbody>
                    {timePunches && timePunches.map((timePunch, i) => (
                        <TimePunchTableRow handleDelete={handleDeleteTimePunch} handleMarkAsPaid={handleMarkAsPaid} key={i} timePunch={timePunch} />
                    ))}
                </tbody>


            </table>
        </div>
    )
}

export default TimePunchTableDisplay