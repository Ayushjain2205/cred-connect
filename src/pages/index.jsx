import Button from "../components/base/Button";
import Card from "../components/base/Card";

export default function Home() {
  return (
    <div className="m-20">
      <h1 className="font-bold">Hello</h1>
      <Button text="Download" type="light" />
      <br />
      <br />
      <Button text="Download" type="dark" />
      <br />
      <br />
      <Card />
    </div>
  );
}
