import React, { FC, memo } from 'react';
import GrillOutlineSvg from '../svg/grill-outline.svg';

export interface IGrillOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GrillOutlineIcon: FC<IGrillOutlineIconProps> = memo(props => {
  return <GrillOutlineSvg {...props} />;
});
