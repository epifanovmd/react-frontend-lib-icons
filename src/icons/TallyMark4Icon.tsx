import React, { FC, memo } from 'react';
import TallyMark4Svg from '../svg/tally-mark-4.svg';

export interface ITallyMark4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TallyMark4Icon: FC<ITallyMark4IconProps> = memo(props => {
  return <TallyMark4Svg {...props} />;
});
