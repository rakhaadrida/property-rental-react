import { Fade } from "react-awesome-reveal";

type MainContentProps = {
  data: Record<string, { content: React.ReactNode }>;
  current: string;
};

const MainContent = ({ data, current }: MainContentProps) => {
  return <Fade>{data[current] && data[current].content}</Fade>;
};

export default MainContent;
