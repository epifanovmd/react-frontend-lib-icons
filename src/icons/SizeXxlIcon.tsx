import React, { FC, memo } from 'react';
import SizeXxlSvg from '../svg/size-xxl.svg';

export interface ISizeXxlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeXxlIcon: FC<ISizeXxlIconProps> = memo(props => {
  return <SizeXxlSvg {...props} />;
});
