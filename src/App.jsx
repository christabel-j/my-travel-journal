import Header from "./components/Header";
import Entry from "./components/Entry";
import Entries from "./data.js";

export default function App() {
  const locations = Entries.map((location) => {
    return <Entry key={location.id} entry={location} />;
  });

  return (
    <>
      <Header />
      <main>{locations}</main>
    </>
  );
}
