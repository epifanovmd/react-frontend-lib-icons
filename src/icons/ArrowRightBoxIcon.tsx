import React, { FC, memo } from 'react';
import ArrowRightBoxSvg from '../svg/arrow-right-box.svg';

export interface IArrowRightBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoxIcon: FC<IArrowRightBoxIconProps> = memo(props => {
  return <ArrowRightBoxSvg {...props} />;
});
