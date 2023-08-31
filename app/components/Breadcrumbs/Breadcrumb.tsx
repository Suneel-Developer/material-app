import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col pt-7 gap-1 ">
      <h2 className="text-xl font-medium text-light_black">
        {pageName}
      </h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-grey text-sm" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-light_black text-sm">{pageName}</li>
        </ol>
        <div className="h-px w-full bg-dark_white my-3"></div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
