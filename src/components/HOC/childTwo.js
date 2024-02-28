import ChangeSet from "./high";
function ChildTwo(props) {
    const { handleColor, colour } = props;
    return (
        <div>
            <h1>Child Two</h1>
            <button onClick={handleColor} style={{ background: colour }}>Change to blue </button>
        </div>
    )
}

export default ChangeSet(ChildTwo);