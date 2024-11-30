export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="capitalize font-medium">{title}</h3>
      <h4 className="capitalize mt-2 text-sm">{company}</h4>
      <p className="capitalize mt-4 text-sm flex items-center gap-x-2">
        color:{' '}
        <span
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};

const colorValue = 'blue-500';

export const ThirdColumn = () => {
  return <h4 className={`bg-${colorValue}`}>Third Column</h4>;
};

export const FourthColumn = () => {
  return <h4 className="bg-blue-500">Fourth Column</h4>;
};
