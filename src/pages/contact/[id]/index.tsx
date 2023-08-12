import { Header, Section } from "@/components/Base";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					id: "slug-abc",
				},
			},
		],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return { props: { params } };
};

export default function Page({
	params,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Section>
			<Header color="black">Detail {params?.id}</Header>
      <Link href={"/"}>Back</Link>
		</Section>
	);
}
