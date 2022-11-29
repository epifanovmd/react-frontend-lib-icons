import React, { FC, memo } from 'react';
import ArrowUUpLeftSvg from '../svg/arrow-u-up-left.svg';

export interface IArrowUUpLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUUpLeftIcon: FC<IArrowUUpLeftIconProps> = memo(props => {
  return <ArrowUUpLeftSvg {...props} />;
});
