interface IContentProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  type: "minimal" | "scrollable"
}

const Content: React.FC<IContentProps> = ({type, children}: IContentProps) => {
    const contentMargin = type === "minimal" ? "mt-20" : "mt-56";
    return (
        <main className={`bg-slate-100 py-6 grow ${contentMargin}`}>
            <div className="md:container mx-auto font-Karla h-full">
                <div className="w-4/5 md:w-full mx-auto h-full">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Content;