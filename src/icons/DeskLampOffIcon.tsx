import React, { FC, memo } from 'react';
import DeskLampOffSvg from '../svg/desk-lamp-off.svg';

export interface IDeskLampOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeskLampOffIcon: FC<IDeskLampOffIconProps> = memo(props => {
  return <DeskLampOffSvg {...props} />;
});
