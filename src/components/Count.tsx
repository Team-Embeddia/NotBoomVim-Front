import { CardDescription } from "./ui/card";

interface Props {
  color: string;
  person: number | string;
}

const Count = ({ color, person }: Props) => {
  return (
    <CardDescription className='text-[34px] flex items-center font-light'>
      <span className={`text-[50px] font-semibold`} style={{ color: color }}>
        {person}
      </span>
      명
    </CardDescription>
  );
};

export default Count;
