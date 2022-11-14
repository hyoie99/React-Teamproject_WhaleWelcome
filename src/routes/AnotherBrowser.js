import { useState } from "react";
import Packaging from "../components/Packaging";
import Select from "../components/Select";

function AnotherBrowser() {
  const [loading, setLoading] = useState(false);

  return (
    <div>{loading ? <Packaging /> : <Select setLoading={setLoading} />}</div>
  );
}

export default AnotherBrowser;
