import React, { useState } from 'react'

type TimePunchDateFilterProps = {
    handleFilterTimePunches: (e: any, fromDate: any, toDate: any) => void
}

const TimePunchDateFilter: React.FC<TimePunchDateFilterProps> = ({ handleFilterTimePunches }) => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')

    return (
        <div>
            <span>Filter by date:</span>
            <form onSubmit={(e) => handleFilterTimePunches(e, fromDate, toDate)}>
                <div className='flex items-center'>
                    <div className='flex flex-col w-fit'>
                        <label>From</label>
                        <input
                            required
                            type="date"
                            onChange={(e) => setFromDate(e.target.value)}
                            value={fromDate}
                        />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label>To</label>
                        <input
                            required
                            type="date"
                            onChange={(e) => setToDate(e.target.value)}
                            value={toDate}
                        />
                    </div>
                    <button type='submit' className="btn btn-secondary">Apply filter</button>
                </div>
            </form>
        </div>
    )
}

export default TimePunchDateFilter