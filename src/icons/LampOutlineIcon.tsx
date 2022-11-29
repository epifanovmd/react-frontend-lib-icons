import React, { FC, memo } from 'react';
import LampOutlineSvg from '../svg/lamp-outline.svg';

export interface ILampOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LampOutlineIcon: FC<ILampOutlineIconProps> = memo(props => {
  return <LampOutlineSvg {...props} />;
});
