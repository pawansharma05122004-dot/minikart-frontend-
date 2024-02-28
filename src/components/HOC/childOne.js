import ChangeSet from './high'
function ChildOne(props) {
  const {handleColor,colour}= props;
     return (
    <div>
      <h1>ChildOne</h1>
      <button onClick={handleColor} style={{background:colour}}>Change to Green </button>
    </div>
  )
}

export default ChangeSet(ChildOne)