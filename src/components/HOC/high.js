import React, { useState } from 'react'

const ChangeSet = (MangeColourChanges) => {
    function High() {
        const [colour, setcolour] = useState('green')
        const handleColor = () => {
            setcolour('blue');
        }
        return (
            <MangeColourChanges colour={colour}  handleColor={handleColor}></MangeColourChanges>
        )
    }
    return High;

}
export default ChangeSet