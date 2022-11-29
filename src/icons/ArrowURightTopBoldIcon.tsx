import React, { FC, memo } from 'react';
import ArrowURightTopBoldSvg from '../svg/arrow-u-right-top-bold.svg';

export interface IArrowURightTopBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowURightTopBoldIcon: FC<IArrowURightTopBoldIconProps> = memo(props => {
  return <ArrowURightTopBoldSvg {...props} />;
});
