import React from 'react'
import { useState } from 'react'
import { Employee } from '@/types/EmployeeTypes'

type TimePunchFormProps = {
    employeeList: Array<Employee>
    createTimePunch: any
}

const TimePunchForm: React.FC<TimePunchFormProps> = ({ createTimePunch, employeeList }) => {
    const [employee_id, setEmployeeId] = useState(1)
    const [employee_name, setEmployeeName] = useState('Christine')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Office')
    const [start_time, setStartTime] = useState('')
    const [end_time, setEndTime] = useState('')

    return (
        <div className=''>
            <form
                onSubmit={() => createTimePunch({
                    employee_id,
                    employee_name,
                    date,
                    location,
                    start_time,
                    end_time,
                })}
                className='flex flex-col gap-4 border-4 border-secondary shadow-xl rounded-xl p-10'>
                <div className='flex justify-evenly items-center'>
                    <div className='flex flex-col w-fit'>
                        <label>Employee</label>
                        <select
                            required
                            className="select select-bordered w-full max-w-xs"
                            onChange={(e) => {
                                switch (e.target.value) {
                                    case 'Christine':
                                        setEmployeeId(1)
                                        setEmployeeName('Christine')
                                    case 'Karen':
                                        setEmployeeId(2)
                                        setEmployeeName('Karen')
                                    default:
                                        return
                                }
                            }}
                            value={employee_name}
                        >
                            <option disabled selected>Employee Name</option>
                            {employeeList.map((employee: Employee, i) => (
                                <option
                                    key={i}
                                >
                                    {employee.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label>Location</label>
                        <select
                            value={location || 'Office'}
                            required
                            className="select select-bordered w-full max-w-xs"
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option disabled selected>Choose a Location</option>
                            <option>Office</option>
                            <option>Klix</option>
                            <option>WV</option>
                            <option>PG</option>
                            <option>TT</option>
                            <option>PS</option>
                            <option>GA</option>
                            <option>SL</option>
                            <option>KS</option>
                            <option>MA</option>
                            <option>WN</option>
                            <option>VS</option>
                            <option>RS</option>
                            <option>QM</option>
                            <option>WP</option>
                            <option>SC</option>
                            <option>ED</option>
                            <option>HC</option>
                            <option>HD</option>
                            <option>QD</option>
                            <option>PW</option>
                            <option>QV</option>
                            <option>DD</option>
                            <option>CW</option>
                            <option>BG</option>
                            <option>HP</option>
                            <option>RD</option>
                            <option>MC</option>
                            <option>WW</option>
                            <option>VI</option>
                            <option>SH</option>
                            <option>GV</option>
                            <option>GL</option>
                            <option>HB</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label>Date</label>
                        <input
                            required
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label>Time Start</label>
                        <input
                            required
                            type="time"
                            onChange={(e) => setStartTime(e.target.value)}
                            value={start_time}
                        />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label>Time End</label>
                        <input
                            required
                            type="time"
                            onChange={(e) => setEndTime(e.target.value)}
                            value={end_time}
                        />
                    </div>
                </div>
                <button type='submit' className="btn btn-primary w-1/3 self-center">Add Time punch</button>
            </form>
        </div>
    )
}

export default TimePunchForm