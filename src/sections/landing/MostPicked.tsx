import { Fade } from "react-awesome-reveal";
import Button from "../../components/button/Button";
import { getImageSrc } from "../../utils/GetImage";
import { forwardRef } from "react";

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
  ref?: React.RefObject<HTMLDivElement | null>;
}

const MostPicked = forwardRef<HTMLElement, MostPickedProps>((props, ref) => {
  return (
    <Fade direction="up">
      <section className="container" ref={ref}>
        <h4 className="mb-4">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostPicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade
                  direction="up"
                  delay={250 * index}
                  triggerOnce
                  fraction={0.5}
                >
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={getImageSrc(item.imageUrl)}
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
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
});

export default MostPicked;
