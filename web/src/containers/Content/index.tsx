import { useStyle } from "@/context/style";

type IContentProps = React.BaseHTMLAttributes<HTMLDivElement>;

const Content: React.FC<IContentProps> = ({ children }: IContentProps) => {
  const { headerType } = useStyle();
  const contentMargin = headerType === "minimal" ? "mt-20" : "mt-56";
  return (
    <main className={`bg-slate-100 p-6 grow ${contentMargin}`}>
      <div className="md:container mx-auto font-Karla h-full">
        <div className="w-4/5 md:w-full mx-auto h-full">{children}</div>
      </div>
    </main>
  );
};

export default Content;
