import React, { FC, memo } from 'react';
import GrillSvg from '../svg/grill.svg';

export interface IGrillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GrillIcon: FC<IGrillIconProps> = memo(props => {
  return <GrillSvg {...props} />;
});
