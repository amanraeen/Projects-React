const Display=({displayVal})=>{
    
    return (
        <>
        <input className='display' value={displayVal} type="text" readOnly />
        </>
    )
}

export default Display