const EmailVerificationInfoPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-700">
            Check Your Email 📩
          </h2>
          <p className="text-sm text-gray-700">
            We’ve sent a verification link to your email address. Please check
            your inbox and click the link to verify your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationInfoPage;
