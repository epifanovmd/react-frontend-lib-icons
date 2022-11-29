import React, { FC, memo } from 'react';
import TallyMark5Svg from '../svg/tally-mark-5.svg';

export interface ITallyMark5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TallyMark5Icon: FC<ITallyMark5IconProps> = memo(props => {
  return <TallyMark5Svg {...props} />;
});
