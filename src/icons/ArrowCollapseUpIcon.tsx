import React, { FC, memo } from 'react';
import ArrowCollapseUpSvg from '../svg/arrow-collapse-up.svg';

export interface IArrowCollapseUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseUpIcon: FC<IArrowCollapseUpIconProps> = memo(props => {
  return <ArrowCollapseUpSvg {...props} />;
});
