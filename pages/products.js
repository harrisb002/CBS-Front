import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

import Header from "@/components/Header";
import Center from "@/components/Center";
import Title from "@/components/Title";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
