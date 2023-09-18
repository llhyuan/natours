import { ReactNode } from "react";

export default function Slate({
  children,
  className,
  order,
}: {
  children: ReactNode;
  className?: string;
  order: number;
}) {
  const tailwindCls = `clip-slate relative top-[-${8 * order}vw]`;

  return (
    <section className={tailwindCls + className ?? " "}>{children}</section>
  );
}
