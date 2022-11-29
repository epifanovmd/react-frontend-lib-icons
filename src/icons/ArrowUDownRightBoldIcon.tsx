import React, { FC, memo } from 'react';
import ArrowUDownRightBoldSvg from '../svg/arrow-u-down-right-bold.svg';

export interface IArrowUDownRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUDownRightBoldIcon: FC<IArrowUDownRightBoldIconProps> = memo(props => {
  return <ArrowUDownRightBoldSvg {...props} />;
});
