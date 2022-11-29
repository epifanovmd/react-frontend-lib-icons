import React, { FC, memo } from 'react';
import ArrowTopRightBoldBoxSvg from '../svg/arrow-top-right-bold-box.svg';

export interface IArrowTopRightBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightBoldBoxIcon: FC<IArrowTopRightBoldBoxIconProps> = memo(props => {
  return <ArrowTopRightBoldBoxSvg {...props} />;
});
