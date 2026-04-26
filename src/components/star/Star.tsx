import "./Star.scss";

interface StarProps {
  className?: string | null;
  value?: number;
  width?: number;
  height?: number;
  spacing?: number;
}

const Star = ({
  className = null,
  value = 0,
  height = 20,
  width = 20,
  spacing = 0,
}: StarProps) => {
  const decimals = Number(value) % 1;
  const limit = value - decimals;
  const star = [];

  let starIndex = 0;
  let leftPos = 0;
  for (let index = 0; index < 5 && index < limit; index++) {
    leftPos = leftPos + width;

    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>,
    );

    starIndex = index;
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starDescimals`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>,
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>,
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
};

export default Star;
