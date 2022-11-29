import React, { FC, memo } from 'react';
import ArrowBottomLeftThinCircleOutlineSvg from '../svg/arrow-bottom-left-thin-circle-outline.svg';

export interface IArrowBottomLeftThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftThinCircleOutlineIcon: FC<IArrowBottomLeftThinCircleOutlineIconProps> = memo(props => {
  return <ArrowBottomLeftThinCircleOutlineSvg {...props} />;
});
