export default function MyButton({ text, customClass }) {
  return <button className={`${customClass}`}>{`${text}`}</button>;
}
