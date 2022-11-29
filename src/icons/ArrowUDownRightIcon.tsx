import React, { FC, memo } from 'react';
import ArrowUDownRightSvg from '../svg/arrow-u-down-right.svg';

export interface IArrowUDownRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUDownRightIcon: FC<IArrowUDownRightIconProps> = memo(props => {
  return <ArrowUDownRightSvg {...props} />;
});
