import { getSession, useSession } from "next-auth/client";

const Analytics = ({ data }) => {
  const session = useSession();
  console.log({ session });
  return (
    <div>
      <h1>Analytics Page {data}</h1>
    </div>
  );
};

export default Analytics;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=htttp://localhost:3000/analytics",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "List of hundred Analytics" : "LIst of free analytics",
    },
  };
}
