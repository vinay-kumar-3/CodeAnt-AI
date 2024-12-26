import { useNavigate } from "react-router-dom";

export const SelfHosted = () => {
  const navigate = useNavigate();
  // Object containing sign-in methods
  const signMethods = [
    {
      id: "gitlab",
      icon: "./src/assets/Gitlab.png",
      altText: "GitLab Icon",
      label: "Self Hosted GitLab",
    },
    {
      id: "sso",
      icon: "./src/assets/Key.png",
      altText: "SSO Icon",
      label: "Sign in with SSO",
    },
  ];

  // Handler for sign-in clicks
  const handleSignIn = (methodId) => {
    console.log(`${methodId}`);
    navigate("/dashboard");
  };

  return (
    <div className="frame-1018">
      {signMethods.map(({ id,icon, altText, label }) => (
        <div
          key={id}
          className="google"
          onClick={() => handleSignIn(label)}
        >
          <div className="icon">
            <img className="image" src={icon} alt={altText} />
          </div>
          <div className="sign-in-with">{label}</div>
        </div>
      ))}
    </div>
  );
};
