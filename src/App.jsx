import qrCodeImage from "./images/image-qr-code.png";

function App() {
  return (
    <>
      <div className="font-outfit flex justify-center items-center min-h-screen bg-light-gray">
        <div className="flex flex-col p-3 shadow-md bg-white rounded-xl w-56 justify-center items-center max-w-xs md:max-w-sm lg:max-w-md">
          <img src={qrCodeImage} width={250} className="rounded-xl" />
          <div className="flex flex-col w-full text-center ">
            <h1 className="text-l mt-5 font-bold leading-tight text-dark-blue">
              Improve your front-end skills by building projects
            </h1>
            <span className="text-xs mt-3 mb-3 text-grayish-blue">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
