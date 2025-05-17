function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */

  const { happy, tired, excited, meh} = counts

  console.log(counts)

  const totalCount = happy + tired + excited + meh

  const happyPercent = Math.round((happy/totalCount)*10000)/100
  const tiredPercent = Math.round((tired/totalCount)*10000)/100
  const excitedPercent = Math.round((excited/totalCount)*10000)/100
  const mehPercent = Math.round((meh/totalCount)*10000)/100


  return (
    <section className="stats">
      <h2>Total votes: {totalCount}</h2>
      <ul>
        <li>😊 Happy: {happyPercent}%</li>
        <li>😴 Tired: {tiredPercent}%</li>
        <li>🤩 Excited: {excitedPercent}%</li>
        <li>😐 Meh: {mehPercent}%</li>
      </ul>
    </section>
  );
}

export default MoodStats