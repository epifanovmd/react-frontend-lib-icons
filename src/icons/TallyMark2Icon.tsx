import React, { FC, memo } from 'react';
import TallyMark2Svg from '../svg/tally-mark-2.svg';

export interface ITallyMark2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TallyMark2Icon: FC<ITallyMark2IconProps> = memo(props => {
  return <TallyMark2Svg {...props} />;
});
