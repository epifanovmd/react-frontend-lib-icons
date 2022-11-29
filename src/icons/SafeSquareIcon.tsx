import React, { FC, memo } from 'react';
import SafeSquareSvg from '../svg/safe-square.svg';

export interface ISafeSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SafeSquareIcon: FC<ISafeSquareIconProps> = memo(props => {
  return <SafeSquareSvg {...props} />;
});
