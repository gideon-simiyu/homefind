const FileInput = ({...props}) => {
    return (
        <div>
            <input type="file" {...props} />
        </div>
    )
}

export default FileInput;