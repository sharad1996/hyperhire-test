//https://nextjs.org/icons/next.svg
export default function ContentBox({ headContent, description }) {
  return (
    <div className="border-white pt-4 pr-4 text-md w-60">
      <h3 className="text-xl font-bold">{headContent}</h3>
      <p>{description}</p>
    </div>
  );
}
