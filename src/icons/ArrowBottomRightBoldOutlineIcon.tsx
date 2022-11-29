import React, { FC, memo } from 'react';
import ArrowBottomRightBoldOutlineSvg from '../svg/arrow-bottom-right-bold-outline.svg';

export interface IArrowBottomRightBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightBoldOutlineIcon: FC<IArrowBottomRightBoldOutlineIconProps> = memo(props => {
  return <ArrowBottomRightBoldOutlineSvg {...props} />;
});
