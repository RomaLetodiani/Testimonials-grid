const UserDiv = ({ user }) => {
  return (
    <div
      className={`${user.class} rounded-xl p-7 shadow-xl flex flex-col gap-3 `}
    >
      <div className="flex items-center gap-5">
        <img
          className="border-2 w-8 h-8 rounded-full"
          src={user.image}
          alt="title"
        />
        <div>
          <h3>{user.name}</h3>
          <p className="text-[13px] text-inherit opacity-50">
            {user.verification}
          </p>
        </div>
      </div>
      <h2 className="text-xl leading-tight font-bold"> {user.title}</h2>
      <p className="text-[13px] text-inherit opacity-70">{user.desc}</p>
    </div>
  );
};

export default UserDiv;
