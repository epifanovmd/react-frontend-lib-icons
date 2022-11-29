import React, { FC, memo } from 'react';
import ArrowULeftBottomSvg from '../svg/arrow-u-left-bottom.svg';

export interface IArrowULeftBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowULeftBottomIcon: FC<IArrowULeftBottomIconProps> = memo(props => {
  return <ArrowULeftBottomSvg {...props} />;
});
