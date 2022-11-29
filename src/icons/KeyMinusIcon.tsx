import React, { FC, memo } from 'react';
import KeyMinusSvg from '../svg/key-minus.svg';

export interface IKeyMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyMinusIcon: FC<IKeyMinusIconProps> = memo(props => {
  return <KeyMinusSvg {...props} />;
});
