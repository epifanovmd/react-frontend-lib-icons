import React, { FC, memo } from 'react';
import ArrowUpBoldBoxSvg from '../svg/arrow-up-bold-box.svg';

export interface IArrowUpBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldBoxIcon: FC<IArrowUpBoldBoxIconProps> = memo(props => {
  return <ArrowUpBoldBoxSvg {...props} />;
});
