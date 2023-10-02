import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Table from "../components/base/Table";

export default function Home() {
  return (
    <div className="m-20">
      <h1 className="font-bold">Hello</h1>
      <Button text="Download" type="light" />
      <br />
      <br />
      <h1 className="font-bold">Hello world</h1>
      <br />
      <br />
      <Table />
      {/* <Card color="#0909">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
        libero officiis deleniti error aspernatur, et hic, eos consequatur
        suscipit eaque tenetur quibusdam in iure. Assumenda esse excepturi
        maxime quisquam.
      </Card> */}
    </div>
  );
}
