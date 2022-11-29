import React, { FC, memo } from 'react';
import DotsGridSvg from '../svg/dots-grid.svg';

export interface IDotsGridIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsGridIcon: FC<IDotsGridIconProps> = memo(props => {
  return <DotsGridSvg {...props} />;
});
