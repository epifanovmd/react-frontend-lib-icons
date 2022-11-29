import React, { FC, memo } from 'react';
import BoxCutterSvg from '../svg/box-cutter.svg';

export interface IBoxCutterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoxCutterIcon: FC<IBoxCutterIconProps> = memo(props => {
  return <BoxCutterSvg {...props} />;
});
