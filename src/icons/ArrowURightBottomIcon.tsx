import React, { FC, memo } from 'react';
import ArrowURightBottomSvg from '../svg/arrow-u-right-bottom.svg';

export interface IArrowURightBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowURightBottomIcon: FC<IArrowURightBottomIconProps> = memo(props => {
  return <ArrowURightBottomSvg {...props} />;
});
