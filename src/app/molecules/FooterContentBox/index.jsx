//https://nextjs.org/icons/next.svg
export default function FooterContentBox({ head, subText, description }) {
  return (
    <div class="text-sm text-gray-700">
      <p>
        <strong>{head}</strong>
      </p>
      <p>{subText}</p>
      <p>{description}</p>
    </div>
  );
}
