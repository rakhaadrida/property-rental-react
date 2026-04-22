import Button from "../../components/button/Button";

interface MostPicked {
  _id: string;
  name: string;
  type?: string;
  imageUrl?: string;
  country?: string;
  city?: string;
  price?: number;
  unit?: string;
}

interface MostPickedProps {
  data: MostPicked[];
  refMostPicked?: React.RefObject<HTMLDivElement | null>;
}

const MostPicked = (props: MostPickedProps) => {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-4">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostPicked-${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span> per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5 className="font-weight-regular">{item.name}</h5>
                  </Button>
                  <span className="font-weight-light">
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
