import React, { FC, memo } from 'react';
import ArrowCollapseDownSvg from '../svg/arrow-collapse-down.svg';

export interface IArrowCollapseDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseDownIcon: FC<IArrowCollapseDownIconProps> = memo(props => {
  return <ArrowCollapseDownSvg {...props} />;
});
