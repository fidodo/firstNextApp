import Link from "next/link"

const IndexPage =()=>{
    return (
        <>
    <h1>
        Home page
    </h1>
    <Link href="/about">
        Go to about page
    </Link>
    </>
        );
};

export default IndexPage;