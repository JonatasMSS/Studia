export const InfoMSG = ({ msg }: { msg: string }) => {
  return (
    <div className=" p-3 m-2 rounded-lg absolute top-0 bg-Iris/80 border-[1px] border-Iris">
      <h2>{msg}</h2>
    </div>
  );
};
