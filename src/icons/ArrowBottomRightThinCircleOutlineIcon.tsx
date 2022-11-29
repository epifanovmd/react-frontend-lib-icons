import React, { FC, memo } from 'react';
import ArrowBottomRightThinCircleOutlineSvg from '../svg/arrow-bottom-right-thin-circle-outline.svg';

export interface IArrowBottomRightThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightThinCircleOutlineIcon: FC<IArrowBottomRightThinCircleOutlineIconProps> = memo(props => {
  return <ArrowBottomRightThinCircleOutlineSvg {...props} />;
});
