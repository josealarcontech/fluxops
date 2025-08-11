import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export function AuthRoutes() {
  return (
    <>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" />
        <SignUp path="/sign-up" routing="path" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
