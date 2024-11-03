const TextInput = ({...props}) => {
    return (
        <div className="mb-6">
            <input type="text" {...props} className="input input-filled" />
        </div>
    )
}

export default TextInput;