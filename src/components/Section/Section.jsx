import LeftSect from './left/LeftSect';
import RightSect from './right/RightSect';

const Section = () => {
  return (
    <div className="flex justify-center">
      <div className='flex justify-between'>
        <LeftSect />
        <RightSect />
      </div>
    </div>
  );
};

export default Section;
