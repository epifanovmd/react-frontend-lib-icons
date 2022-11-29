import React, { FC, memo } from 'react';
import MarginSvg from '../svg/margin.svg';

export interface IMarginIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MarginIcon: FC<IMarginIconProps> = memo(props => {
  return <MarginSvg {...props} />;
});
