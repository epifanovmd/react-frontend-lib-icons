import React, { FC, memo } from 'react';
import SizeXsSvg from '../svg/size-xs.svg';

export interface ISizeXsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeXsIcon: FC<ISizeXsIconProps> = memo(props => {
  return <SizeXsSvg {...props} />;
});
