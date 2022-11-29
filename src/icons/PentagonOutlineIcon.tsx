import React, { FC, memo } from 'react';
import PentagonOutlineSvg from '../svg/pentagon-outline.svg';

export interface IPentagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PentagonOutlineIcon: FC<IPentagonOutlineIconProps> = memo(props => {
  return <PentagonOutlineSvg {...props} />;
});
