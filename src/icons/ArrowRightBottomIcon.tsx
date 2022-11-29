import React, { FC, memo } from 'react';
import ArrowRightBottomSvg from '../svg/arrow-right-bottom.svg';

export interface IArrowRightBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBottomIcon: FC<IArrowRightBottomIconProps> = memo(props => {
  return <ArrowRightBottomSvg {...props} />;
});
