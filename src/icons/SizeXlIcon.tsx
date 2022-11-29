import React, { FC, memo } from 'react';
import SizeXlSvg from '../svg/size-xl.svg';

export interface ISizeXlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeXlIcon: FC<ISizeXlIconProps> = memo(props => {
  return <SizeXlSvg {...props} />;
});
