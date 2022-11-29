import React, { FC, memo } from 'react';
import ArrowURightBottomBoldSvg from '../svg/arrow-u-right-bottom-bold.svg';

export interface IArrowURightBottomBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowURightBottomBoldIcon: FC<IArrowURightBottomBoldIconProps> = memo(props => {
  return <ArrowURightBottomBoldSvg {...props} />;
});
