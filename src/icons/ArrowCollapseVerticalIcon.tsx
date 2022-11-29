import React, { FC, memo } from 'react';
import ArrowCollapseVerticalSvg from '../svg/arrow-collapse-vertical.svg';

export interface IArrowCollapseVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseVerticalIcon: FC<IArrowCollapseVerticalIconProps> = memo(props => {
  return <ArrowCollapseVerticalSvg {...props} />;
});
