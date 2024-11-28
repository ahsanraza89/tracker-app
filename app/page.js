import Balance from "@/components/tracker2/balance/balance";
import styles from "./page.module.css";
import MyTracker from "@/components/expensetracker/tracker";
import NewTransection from "@/components/tracker2/newTransection/newTransection";
import History from "@/components/tracker2/transectionHistory/history";
import Header from "@/components/tracker2/header/header";

export default function Home() {
  return (
    <div className="container text-center">
      <Header></Header>
     <Balance></Balance>
     <History></History>
     <NewTransection></NewTransection>
     {/* <MyTracker></MyTracker> */}
    </div>
  );
}
