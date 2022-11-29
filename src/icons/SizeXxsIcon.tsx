import React, { FC, memo } from 'react';
import SizeXxsSvg from '../svg/size-xxs.svg';

export interface ISizeXxsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeXxsIcon: FC<ISizeXxsIconProps> = memo(props => {
  return <SizeXxsSvg {...props} />;
});
