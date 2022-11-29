import React, { FC, memo } from 'react';
import DeskLampOnSvg from '../svg/desk-lamp-on.svg';

export interface IDeskLampOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeskLampOnIcon: FC<IDeskLampOnIconProps> = memo(props => {
  return <DeskLampOnSvg {...props} />;
});
