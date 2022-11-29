import React, { FC, memo } from 'react';
import HandWashSvg from '../svg/hand-wash.svg';

export interface IHandWashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandWashIcon: FC<IHandWashIconProps> = memo(props => {
  return <HandWashSvg {...props} />;
});
