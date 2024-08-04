import React from "react";

function Page({ params }: { params: { service: string } }) {
  return <div>page {params.service}</div>;
}

export default Page;
