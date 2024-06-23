import { Helmet } from "react-helmet-async";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>ChetonaProkashon - Admin</title>
      </Helmet>
      <h2 className="text-4xl font-bold my-12">Welcome Admin</h2>
    </>
  );
}
