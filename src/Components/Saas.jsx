import { useNavigate } from "react-router-dom";

export const Saas = () => {
  const navigate = useNavigate();

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
    // Perform authentication logic here (optional)
    navigate("/dashboard"); // Redirect to the dashboard page
  };

  return (
    <div className="frame-1018">
      <div className="google" onClick={() => handleSignIn("Github")}>
        <div className="icon">
          <img
            className="image-1"
            src="./src/assets/github.png"
            alt="Github Icon"
          />
        </div>
        <div className="sign-in-with">Sign in with Github</div>
      </div>
      <div className="google" onClick={() => handleSignIn("Bitbucket")}>
        <div className="icon">
          <img
            className="image-2"
            src="./src/assets/Bitbucket.png"
            alt="Bitbucket Icon"
          />
        </div>
        <div className="sign-in-with">Sign in with Bitbucket</div>
      </div>
      <div className="google" onClick={() => handleSignIn("Azure DevOps")}>
        <div className="icon">
          <img
            className="image"
            src="./src/assets/azure.png"
            alt="Azure Icon"
          />
        </div>
        <div className="sign-in-with">Sign in with Azure DevOps</div>
      </div>
      <div className="google" onClick={() => handleSignIn("GitLab")}>
        <div className="icon">
          <img
            className="image"
            src="./src/assets/Gitlab.png"
            alt="GitLab Icon"
          />
        </div>
        <div className="sign-in-with">Sign in with GitLab</div>
      </div>
    </div>
  );
};