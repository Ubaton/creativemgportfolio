import LandingPage from "@/containers/Home/LandingPage";
import Image from "next/image";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage />
    </main>
  );
}
