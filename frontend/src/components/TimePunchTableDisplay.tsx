import React, { useRef } from 'react'
import { TimePunch } from '@/types/TimePunchTypes'
import TimePunchTableRow from './TimePunchTableRow'
import TimePunchTableHeader from './TimePunchTableHeader'
import { useReactToPrint } from 'react-to-print'

type TimePunchTableDisplayOwnProps = {
    timePunches: Array<TimePunch>
}

const TimePunchTableDisplay: React.FC<TimePunchTableDisplayOwnProps> = ({ timePunches }) => {

    const componentRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current!,
        documentTitle: 'timepunch-data',
    })

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

    return (
        <div className="overflow-x-auto w-full">
            <button className='btn btn-accent' onClick={handlePrint}>Print Table</button>
            <div ref={componentRef} style={{ width: '100%', height: '100%' }}>
                <table className="table w-full">
                    <TimePunchTableHeader />
                    <tbody>
                        {timePunches && timePunches.map((timePunch, i) => (
                            <TimePunchTableRow handleDelete={handleDeleteTimePunch} handleMarkAsPaid={handleMarkAsPaid} key={i} timePunch={timePunch} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TimePunchTableDisplay