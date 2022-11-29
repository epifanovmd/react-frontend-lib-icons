import React, { FC, memo } from 'react';
import ShoePrintSvg from '../svg/shoe-print.svg';

export interface IShoePrintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoePrintIcon: FC<IShoePrintIconProps> = memo(props => {
  return <ShoePrintSvg {...props} />;
});
