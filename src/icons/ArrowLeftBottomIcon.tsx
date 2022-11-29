import React, { FC, memo } from 'react';
import ArrowLeftBottomSvg from '../svg/arrow-left-bottom.svg';

export interface IArrowLeftBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBottomIcon: FC<IArrowLeftBottomIconProps> = memo(props => {
  return <ArrowLeftBottomSvg {...props} />;
});
