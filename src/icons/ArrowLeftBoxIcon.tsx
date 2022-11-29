import React, { FC, memo } from 'react';
import ArrowLeftBoxSvg from '../svg/arrow-left-box.svg';

export interface IArrowLeftBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoxIcon: FC<IArrowLeftBoxIconProps> = memo(props => {
  return <ArrowLeftBoxSvg {...props} />;
});
