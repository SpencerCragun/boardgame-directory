

const BgDetails = ({ data }) => {

  if (!data) {
    return <p>No board game selected. Go back and choose one!</p>;
  }

  return (
    <>
      {/* intro content for game */}
      <img alt="bg-cover art"></img>
      <h2>{data.name}</h2>
      <p></p>
      
      {/* mechanics list */}
      <section className="mechanics-section">
        {/* somehow fill an li with each of the mechanics in the db */}
        <ul className="mechanics-ul">
          <li>mechanic here</li>
          <li>mechanic here</li>
          <li>mechanic here</li>
        </ul>
      </section>

      {/* a form to record games played / results */}
      <section className="log-section">
        <h2>Results</h2>
        <form className="log-form">
          <input type="text" placeholder="Who Played?"></input>
          <input type="text" placeholder="Who Won?"></input>
          <input type="number" placeholder="Fun Meter 1-10"></input>
          <input type="text" placeholder="Moments to Remember"></input>
          <button className="log-button">Save Results!</button>
        </form>
      </section>
    </>
  )
}

export  default BgDetails