import { InfoSection } from "../components/features/InfoSection";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const Signup = () => {
  return (
    <div className="flex h-screen w-100">
        <InfoSection head="Taxes on Auto-Pilot for Individuals"
        paragraph="FinX lets you import trade P&L, recommends optimal tax regime, discovers tax savings opportunities and helps you calculate & pay taxes on time."
        title="Tax Planning"
        info="Start early, plan your financial year & save taxes like a pro"
        />
      <div className="flex flex-col justify-center w-2/4 p-16 border-l-2">
      <form className="flex flex-col rounded-xl border p-10">
      <h2 className="text-center p-4 font-semibold text-lg">Create your account here</h2>
        <Input placeholder="First Name" type="text" aria-required />
        <Input placeholder="Last Name" type="text" aria-required />
        <Input placeholder="Enter email" type="email" aria-required />
        <Input placeholder="Enter password" type="password" aria-required />
        <Button type="submit" buttonTitle="Sign Up" />
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <a href="" >Already have an account?</a>
      </form>
      </div>
    </div>
  );
};
