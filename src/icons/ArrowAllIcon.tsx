import React, { FC, memo } from 'react';
import ArrowAllSvg from '../svg/arrow-all.svg';

export interface IArrowAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowAllIcon: FC<IArrowAllIconProps> = memo(props => {
  return <ArrowAllSvg {...props} />;
});
