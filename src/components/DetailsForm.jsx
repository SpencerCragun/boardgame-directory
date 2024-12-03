const DetailsForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    for (let [key, value] of formData.entries()){
      console.log(`${key}: ${value}`)
    }
  };
  
  return(
    <section className="log-section">
      <h2>Results</h2>
      <form onSubmit={handleSubmit} className="log-form">
        <label>Who Played?</label>
        <input type="text" name="whoPlayed"></input>
        
        <label>Who Won?</label>
        <input type="text" name="whoWon?"></input>
        
        <label>Fun Meter</label>
        <input type="number" name="funMeter"></input>
        
        <label>Memorable Moments</label>
        <input type="text" name="memorableMoment"></input>
        
        <button type="submit" className="log-button">Save Results!</button>
      </form>
      <hr></hr>
      <ul className="submittedLog">
        
      </ul>
    </section>
  )
}

export default DetailsForm