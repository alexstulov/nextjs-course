function UserIdPage(props) {
  return <h1>{props.uid}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      uid: 'userid-' + userId
    }
  };
}
