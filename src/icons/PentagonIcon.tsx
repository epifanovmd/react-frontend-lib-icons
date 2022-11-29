import React, { FC, memo } from 'react';
import PentagonSvg from '../svg/pentagon.svg';

export interface IPentagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PentagonIcon: FC<IPentagonIconProps> = memo(props => {
  return <PentagonSvg {...props} />;
});
