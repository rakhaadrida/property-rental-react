interface Activity {
  _id: string;
  name: string;
  type: string;
  imageUrl: string;
  isPopular?: boolean;
}

interface ActivitiesProps {
  data: Activity[];
}

const Activities = ({ data }: ActivitiesProps) => {
  return (
    <section className="container detail-activities">
      <h2 className="detail-activities-heading">Treasure to Choose</h2>
      <div className="detail-activities-grid">
        {data.map((item, index) => (
          <div key={`${item.name}-${index}`}>
            <figure className="detail-activities-image">
              {item.isPopular && (
                <span className="detail-activities-badge">
                  Popular <span>Choice</span>
                </span>
              )}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="img-cover"
              />
            </figure>
            <h3 className="detail-activities-name">{item.name}</h3>
            <p className="detail-activities-type">{item.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
