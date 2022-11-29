import React, { FC, memo } from 'react';
import SealSvg from '../svg/seal.svg';

export interface ISealIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SealIcon: FC<ISealIconProps> = memo(props => {
  return <SealSvg {...props} />;
});
