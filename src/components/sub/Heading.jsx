const Heading = ({ text }) => {
  return (
    <h1
      className="
      text-3xl sm:text-2xl font-bold text-gray-600 self-start mb-10 
    dark:text-white transition-colors"
    >
      {text}
    </h1>
  );
};

export default Heading;
