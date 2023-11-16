const Wrapper = ({ title, children }) => {
  return (
    <div className="border-black rounded-lg border-2 p-2 bg-gray-100">
      <h2>{title}</h2>
      <div className="h-52 overflow-auto">{children}</div>
    </div>
  );
};

export default Wrapper;