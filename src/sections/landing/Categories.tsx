import Button from "../../components/button/Button";

interface CategoryItem {
  _id: string;
  name: string;
  imageUrl?: string;
  country?: string;
  city?: string;
  isPopular?: boolean;
}

interface Category {
  _id: string;
  name: string;
  items: CategoryItem[];
}

interface CategoryProps {
  data: Category[];
}

const Categories = (props: CategoryProps) => {
  return props.data.map((category, index) => {
    return (
      <section className="container" key={`category-${index}`}>
        <h4 className="mb-4 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, itemIndex) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index}-item-${itemIndex}`}
                >
                  <div className="card category-card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-gray-800"
                      >
                        <h5 className="h4 text-gray-900 font-weight-regular">
                          {item.name}
                        </h5>
                      </Button>
                      <span className="text-gray-500 font-weight-light">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
