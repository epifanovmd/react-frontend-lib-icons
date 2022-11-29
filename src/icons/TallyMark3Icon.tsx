import React, { FC, memo } from 'react';
import TallyMark3Svg from '../svg/tally-mark-3.svg';

export interface ITallyMark3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TallyMark3Icon: FC<ITallyMark3IconProps> = memo(props => {
  return <TallyMark3Svg {...props} />;
});
