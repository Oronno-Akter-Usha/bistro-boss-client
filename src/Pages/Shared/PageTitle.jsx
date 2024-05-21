import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | {title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
