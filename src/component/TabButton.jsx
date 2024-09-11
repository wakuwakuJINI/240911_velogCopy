export default function TabButton({ children, isSelected, ...props }) {
  return (
    <>
      <button {...props} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </>
  );
}
