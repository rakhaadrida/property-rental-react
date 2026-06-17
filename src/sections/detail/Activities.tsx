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
    <section className="tw:mx-auto tw:mt-20 tw:max-w-6xl tw:px-6">
      <h2 className="tw:text-xl tw:font-semibold tw:text-ink">
        Treasure to Choose
      </h2>
      <div className="tw:mt-6 tw:grid tw:grid-cols-2 tw:gap-6 tw:md:grid-cols-4">
        {data.map((item, index) => (
          <div key={`${item.name}-${index}`}>
            <figure className="tw:relative tw:h-40 tw:overflow-hidden tw:rounded-2xl">
              {item.isPopular && (
                <span className="tw:absolute tw:left-0 tw:top-4 tw:rounded-r-full tw:bg-pink tw:py-1 tw:pl-4 tw:pr-5 tw:text-sm tw:font-medium tw:text-white">
                  Popular <span className="tw:font-light">Choice</span>
                </span>
              )}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="tw:h-full tw:w-full tw:object-cover"
              />
            </figure>
            <h3 className="tw:mt-3 tw:text-base tw:font-semibold tw:text-ink">
              {item.name}
            </h3>
            <p className="tw:text-sm tw:text-muted">{item.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
