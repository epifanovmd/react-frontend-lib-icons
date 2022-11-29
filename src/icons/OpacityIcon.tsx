import React, { FC, memo } from 'react';
import OpacitySvg from '../svg/opacity.svg';

export interface IOpacityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OpacityIcon: FC<IOpacityIconProps> = memo(props => {
  return <OpacitySvg {...props} />;
});
