import { Header, Section } from "@/components/Base"
import Link from "next/link"

const Page: React.FC<{}> = () => {
  return (
    <Section>
      <Header color="black">Larry Phone Book</Header>
      <Link href={"/contact/slug-abc"}>Go To Detail</Link>
    </Section>
  )
}

export default Page