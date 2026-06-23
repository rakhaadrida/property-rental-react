import { Fade } from "react-awesome-reveal";

const Controller = (props: { children: React.ReactNode }) => {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-3 text-center">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
};

export default Controller;
