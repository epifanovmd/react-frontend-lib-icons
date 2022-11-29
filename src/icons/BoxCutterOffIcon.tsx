import React, { FC, memo } from 'react';
import BoxCutterOffSvg from '../svg/box-cutter-off.svg';

export interface IBoxCutterOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoxCutterOffIcon: FC<IBoxCutterOffIconProps> = memo(props => {
  return <BoxCutterOffSvg {...props} />;
});
