import Pill from "../Pill";

type CategoryListProps = {
  categories?: {
    id: string;
    name: string;
    plural_name: string;
    short_name: string;
    icon: {
      prefix: string;
      suffix: string;
    };
  }[];
};

export default function CategoryList({ categories }: CategoryListProps) {
  if (!categories?.length) {
    return null;
  }

  const headingString = categories.length > 1 ? "Categories" : "Category";

  return (
    <div>
      <h4>{headingString}:</h4>
      {categories.map((category) => (
        <Pill key={category.id}>{category.short_name}</Pill>
      ))}
    </div>
  );
}
