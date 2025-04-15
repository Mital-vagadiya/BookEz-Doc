const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary w-full flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full flex flex-col items-center space-y-8">
        <div className="relative w-full max-w-xl">
          {/* <img
            src={Image.NotFoundImage}
            alt="Page not found illustration"
            className="w-full h-full object-contain"
          /> */}
        </div>

        <h1 className="text-heading font-bold text-center text-shadow-custom text-text">
          Page Not Found
        </h1>

        <p className="text-paragraph text-center text-shadow-custom text-text">
          Oops! We couldn't find the page that you are looking for.
        </p>

        {/* <Button
        variant="main"
        onClick={() => navigate("/")}
      >
        Back to Dashboard
      </Button> */}
      </div>
    </div>
  );
};

export default NotFound;
