import { CardDescription } from './ui/card';

interface Props {
  color: string;
  person: number;
  loading: boolean;
}

const Count = ({ color, person, loading }: Props) => {
  if (loading) {
    return (
      <CardDescription className='text-[34px] flex items-center font-light'>
        <span className={`text-[50px] font-semibold`}>로딩중..</span>
      </CardDescription>
    );
  }

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
