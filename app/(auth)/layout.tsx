import { Logo } from "../(routes)/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo />
      <h1 className="text-3xl font-bold">Welcome to my Dashboard!</h1>
      <h2 className="text-xl font-semibold">companies Dashboard</h2>
      <br />
      <br />
      {children}
    </div>
  );
}
