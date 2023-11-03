import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortBy: string };
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      
        <UserTable sortBy={sortBy} />
    </>
  );
};

export default UsersPage;
