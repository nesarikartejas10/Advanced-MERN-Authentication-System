import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import api from "../../api/axios";
import { toast } from "react-toastify";

const EmailVerifiedPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [status, setStatus] = useState("Verifying...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    verifyEmail();
  }, [token, navigate]);

  const verifyEmail = async () => {
    try {
      const response = await api.post(
        "/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response?.data?.success) {
        toast.success("Please wait...");
        setStatus("✔️ Email Verified Successfully");
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setSuccess(false);
      setStatus("❌ Verification Failed.Please try again");
      toast.error(`${error?.response?.data?.message}`);
      setTimeout(() => {
        navigate("/signup");
      }, 3000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="min-h-screen flex items-center justify-center px-4 bg-[url('/bg-img.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-700">
            {status}
          </h3>
          {success ? (
            <p className="text-sm text-gray-700">
              Your email has been successfully verified. You can now log in to
              your account
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
