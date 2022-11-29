import React, { FC, memo } from 'react';
import ArrowDownBoxSvg from '../svg/arrow-down-box.svg';

export interface IArrowDownBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoxIcon: FC<IArrowDownBoxIconProps> = memo(props => {
  return <ArrowDownBoxSvg {...props} />;
});
