import React, { FC, memo } from 'react';
import ArrowExpandSvg from '../svg/arrow-expand.svg';

export interface IArrowExpandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandIcon: FC<IArrowExpandIconProps> = memo(props => {
  return <ArrowExpandSvg {...props} />;
});
