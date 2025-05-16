import { BeatLoader } from "react-spinners";
export default function Loader() {
  return (
    <BeatLoader
      color="#f7111e"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
