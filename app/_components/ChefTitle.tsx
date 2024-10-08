function ChefTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="text-3xl my-8 text-center">{children}</h1>;
}

export default ChefTitle;
