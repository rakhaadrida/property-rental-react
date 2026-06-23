import { Fade } from "react-awesome-reveal";

type MetaProps = {
  data: Record<
    string,
    { title: string; description: string | null; content: React.ReactNode }
  >;
  current: string;
};

const Meta = ({ data, current }: MetaProps) => {
  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="text-gray-500 font-weight-light">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
};

export default Meta;
