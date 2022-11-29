import React, { FC, memo } from 'react';
import ArmFlexSvg from '../svg/arm-flex.svg';

export interface IArmFlexIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArmFlexIcon: FC<IArmFlexIconProps> = memo(props => {
  return <ArmFlexSvg {...props} />;
});
