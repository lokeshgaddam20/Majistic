import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/sign-in">
      <div>
        <Button>LogIn</Button>
      </div>
      </Link>
      <Link href="/sign-up">
      <div>
        <Button>Register</Button>
      </div>
      </Link>
    </div>
  );
};

export default LandingPage;
