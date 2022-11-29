import React, { FC, memo } from 'react';
import HeatingCoilSvg from '../svg/heating-coil.svg';

export interface IHeatingCoilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeatingCoilIcon: FC<IHeatingCoilIconProps> = memo(props => {
  return <HeatingCoilSvg {...props} />;
});
