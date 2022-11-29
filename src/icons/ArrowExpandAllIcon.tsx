import React, { FC, memo } from 'react';
import ArrowExpandAllSvg from '../svg/arrow-expand-all.svg';

export interface IArrowExpandAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandAllIcon: FC<IArrowExpandAllIconProps> = memo(props => {
  return <ArrowExpandAllSvg {...props} />;
});
