import React, { FC, memo } from 'react';
import ArrowBottomRightBoldBoxOutlineSvg from '../svg/arrow-bottom-right-bold-box-outline.svg';

export interface IArrowBottomRightBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightBoldBoxOutlineIcon: FC<IArrowBottomRightBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowBottomRightBoldBoxOutlineSvg {...props} />;
});
