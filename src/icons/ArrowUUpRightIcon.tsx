import React, { FC, memo } from 'react';
import ArrowUUpRightSvg from '../svg/arrow-u-up-right.svg';

export interface IArrowUUpRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUUpRightIcon: FC<IArrowUUpRightIconProps> = memo(props => {
  return <ArrowUUpRightSvg {...props} />;
});
