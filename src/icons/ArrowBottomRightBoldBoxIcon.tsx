import React, { FC, memo } from 'react';
import ArrowBottomRightBoldBoxSvg from '../svg/arrow-bottom-right-bold-box.svg';

export interface IArrowBottomRightBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightBoldBoxIcon: FC<IArrowBottomRightBoldBoxIconProps> = memo(props => {
  return <ArrowBottomRightBoldBoxSvg {...props} />;
});
