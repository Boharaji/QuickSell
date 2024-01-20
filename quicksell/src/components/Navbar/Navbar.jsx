import React, { useState } from 'react'
import { MdOutlineTune } from "react-icons/md"
import { FaAngleDown } from "react-icons/fa"
import './navbar.css'

const Navbar = () => {
    const [visibility, setVisibility] = useState(false)

    const handleDisplayClick = () => {
        setVisibility(!visibility)
    }

    return (
        <div className='nav-container'>
            <div className='nav-display-container'>
                <button 
                    className="nav-display-btn"
                    onClick={handleDisplayClick}
            >
                    <MdOutlineTune />
                    <div className='nav-display-btn-title'>Display</div>
                    <FaAngleDown />
                </button>
            </div>

            <div className='nav-filter-container'>
                <div className='nav-grouping'>
                    Grouping

                    <select>
                        <option>Status</option>
                        <option>User</option>
                        <option>Priority</option>
                    </select>
                </div>
                <div className="nav-ordering">
                    Ordering

                    <select>
                        <option>Status</option>
                        <option>User</option>
                        <option>Priority</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar