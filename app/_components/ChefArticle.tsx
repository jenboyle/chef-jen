function ChefArticle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="text-2xl my-8">{children}</article>;
}

export default ChefArticle;
