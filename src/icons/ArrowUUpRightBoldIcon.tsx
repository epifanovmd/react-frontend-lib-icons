import React, { FC, memo } from 'react';
import ArrowUUpRightBoldSvg from '../svg/arrow-u-up-right-bold.svg';

export interface IArrowUUpRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUUpRightBoldIcon: FC<IArrowUUpRightBoldIconProps> = memo(props => {
  return <ArrowUUpRightBoldSvg {...props} />;
});
