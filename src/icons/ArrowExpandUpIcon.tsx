import React, { FC, memo } from 'react';
import ArrowExpandUpSvg from '../svg/arrow-expand-up.svg';

export interface IArrowExpandUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandUpIcon: FC<IArrowExpandUpIconProps> = memo(props => {
  return <ArrowExpandUpSvg {...props} />;
});
