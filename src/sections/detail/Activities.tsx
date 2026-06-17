import { Fade } from "react-awesome-reveal";

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
    <section className="container activities">
      <h4 className="font-weight-medium text-gray-900 mb-4">
        Treasure to Choose
      </h4>
      <div className="container-grid">
        {data.map((item, index) => (
          <div className="item column-3 row-1" key={`${item.name}-${index}`}>
            <Fade direction="up" delay={200 * index} triggerOnce>
              <div className="card category-card">
                {item.isPopular && (
                  <div className="tag">
                    Popular <span className="font-weight-light">Choice</span>
                  </div>
                )}
                <figure className="img-wrapper category-image">
                  <img src={item.imageUrl} alt={item.name} className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                  <h5 className="h4 text-gray-900 font-weight-regular">
                    {item.name}
                  </h5>
                  <span className="text-gray-500 font-weight-light">
                    {item.type}
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
