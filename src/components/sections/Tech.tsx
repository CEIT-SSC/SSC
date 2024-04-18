import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

const Tech = () => {
  return (
    <>
      <div className="flex flex-col gap-10 ">
        <p className="text-[60px] font-bold text-white">partnership</p>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map(technology => (
            <div className="h-28 w-28" key={technology.name}>
              <BallCanvas icon={technology.icon} bg={technology.bg} />
            </div>
          ))}
        </div>
      </div>
      <div id="board"></div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
