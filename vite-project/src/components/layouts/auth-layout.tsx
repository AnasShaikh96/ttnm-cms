export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="w-[36rem] h-fit border p-10 rounded-lg bg-white shadow-md shadow-black-700">
          <h2 className="text-4xl text-center mb-10 font-serif font-bold ">
            Clone
            <span className="text-deep-purple-600 underline underline-offset-4">
              ium
            </span>
          </h2>
          {children}
        </div>
      </div>
    </>
  );
};
