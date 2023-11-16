const Site = ({ link, text }) => {
  return (
    <a href={link}>
      <div className="flex gap-1 items-center rounded-lg hover:bg-white p-2">
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`}
        />
        <div>
          <span className="text-blue-500">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default Site