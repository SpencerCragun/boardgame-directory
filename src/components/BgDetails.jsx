import DetailsForm from "./detailsForm";

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
      <DetailsForm />
    </>

  )
}

export  default BgDetails