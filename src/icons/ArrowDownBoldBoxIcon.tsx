import React, { FC, memo } from 'react';
import ArrowDownBoldBoxSvg from '../svg/arrow-down-bold-box.svg';

export interface IArrowDownBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldBoxIcon: FC<IArrowDownBoldBoxIconProps> = memo(props => {
  return <ArrowDownBoldBoxSvg {...props} />;
});
