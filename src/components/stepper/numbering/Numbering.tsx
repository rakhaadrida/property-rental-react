import { Fade } from "react-awesome-reveal";
import "./Numbering.scss";

interface NumberingProps {
  style?: React.CSSProperties;
  className?: string;
  data?: Record<string, unknown>;
  current?: string;
}

const Numbering = ({
  style,
  className,
  data = {},
  current,
}: NumberingProps) => {
  const keysOfData = Object.keys(data || {});

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {keysOfData.map((key, index) => {
          let isActive = key === current ? "active" : "";

          if (index + 1 === keysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`step-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
};

export default Numbering;
