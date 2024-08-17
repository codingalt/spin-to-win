import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useMediaQuery } from "@uidotdev/usehooks";
import { setAuth } from "@/services/slices/auth/authSlice";
import { useValidateTokenQuery } from "@/services/api/authApi";

const Protected = ({ Component }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const {
    data: token,
    isLoading,
    isSuccess,
    error,
  } = useValidateTokenQuery(null, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    const authToken = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
    if (!authToken) {
      navigate("/");
    } else {
      // Check for token validity
      if (!isLoading) {
        dispatch(setAuth(token?.user));

        if (!isLoading && isSuccess) {
          setShow(true);
        } else if (!isLoading && error) {
          setShow(false);
          navigate("/");
        }
      }
    }
  }, [token, isSuccess, error, isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "999",
          paddingBottom: "3rem",
        }}
      >
        <ClipLoader
          color="#76AFBC"
          size={isSmallDevice ? 34 : 45}
          speedMultiplier={0.85}
        />
      </div>
    );
  }

  return show && <Component />;
};

export default Protected;
