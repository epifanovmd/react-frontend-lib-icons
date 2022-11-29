import React, { FC, memo } from 'react';
import ArrowExpandVerticalSvg from '../svg/arrow-expand-vertical.svg';

export interface IArrowExpandVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandVerticalIcon: FC<IArrowExpandVerticalIconProps> = memo(props => {
  return <ArrowExpandVerticalSvg {...props} />;
});
