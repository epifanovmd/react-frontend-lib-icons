import React, { FC, memo } from 'react';
import ArrowURightTopSvg from '../svg/arrow-u-right-top.svg';

export interface IArrowURightTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowURightTopIcon: FC<IArrowURightTopIconProps> = memo(props => {
  return <ArrowURightTopSvg {...props} />;
});
