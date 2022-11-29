import React, { FC, memo } from 'react';
import ArmFlexOutlineSvg from '../svg/arm-flex-outline.svg';

export interface IArmFlexOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArmFlexOutlineIcon: FC<IArmFlexOutlineIconProps> = memo(props => {
  return <ArmFlexOutlineSvg {...props} />;
});
