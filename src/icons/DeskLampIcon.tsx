import React, { FC, memo } from 'react';
import DeskLampSvg from '../svg/desk-lamp.svg';

export interface IDeskLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeskLampIcon: FC<IDeskLampIconProps> = memo(props => {
  return <DeskLampSvg {...props} />;
});
