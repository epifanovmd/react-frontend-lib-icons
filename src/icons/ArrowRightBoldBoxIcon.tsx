import React, { FC, memo } from 'react';
import ArrowRightBoldBoxSvg from '../svg/arrow-right-bold-box.svg';

export interface IArrowRightBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldBoxIcon: FC<IArrowRightBoldBoxIconProps> = memo(props => {
  return <ArrowRightBoldBoxSvg {...props} />;
});
