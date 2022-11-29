import React, { FC, memo } from 'react';
import SizeXxxlSvg from '../svg/size-xxxl.svg';

export interface ISizeXxxlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeXxxlIcon: FC<ISizeXxxlIconProps> = memo(props => {
  return <SizeXxxlSvg {...props} />;
});
